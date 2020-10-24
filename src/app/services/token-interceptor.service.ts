import { HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req, next) {

        //Check for url. If it is login url then return
        if (req.url.includes('api/v1/auth')) {
             return next.handle(req);
       }


        console.log(' Intercetion In Progress ...');                   // SECTION 1
        let authService = this.injector.get(AuthService);
        let tokennizedReq = req.clone({
      setHeaders: {
        Autorization:  authService.getToken()
      }
    });
 //   console.log('tokennizedReq ===>', tokennizedReq)
        return next.handle(tokennizedReq)
               .pipe(
                 catchError((error: HttpErrorResponse) => {
                                                                       // 401 UNAUTHORIZED - SECTION 2
                    if (error && error.status === 401) {
                          console.log('ERROR 401 UNAUTHORIZED');
                    }
                    const err = error.error.message || error.statusText;
                    return throwError(error);
                 })
               );
  }
}
