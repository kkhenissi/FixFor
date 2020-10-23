import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subTotal'
})
export class SubTotalPipe implements PipeTransform {
  currencyPipe;

  constructor() {}
  transform(cart): any {
    let total = 0;
    Object.values(cart).forEach((prd: any) => {
      console.log('--------------->', prd);
      if (prd.count) {
        total += prd.count * prd.price;
      }
    });

    return total;
  }

}
