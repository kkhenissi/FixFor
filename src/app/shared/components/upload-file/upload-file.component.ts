import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  imageName: any;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  message: string;

  constructor(private uploadService: UploadFileService,
              private http: HttpClient) { }

  ngOnInit(): void {

  }
  // Gets called when the user selects an image
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];

  }
  // Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);

    // FormData API provides methods and properties to allow us easily prepare form data
    const uploadImagegData = new FormData();
    uploadImagegData.append('imageFile', this.selectedFile, this.selectedFile.name);

    // Mke a call to the spring boot server to save the image
    this.http.post('http://localhost:8086/image/upload', uploadImagegData, {observe: 'response'})
                       .subscribe((response) => {
                      if (response.status === 200) {
                        this.message = 'Image uploaded successfully';
                      } else {
                        this.message = 'Image not uploaded !!';
                      }



  });
}
// Gets called when user cliks on retieve image button to get the image from the server
getImage() {
  // Make a callto spring Boot to get the Image Bytes
  this.http.get('http://localhost:8086/image/get'+this.imageName)
      .subscribe((res) => {
        this.retrieveResponse = res;
        this.base64Data = this.retrieveResponse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      });

}

}
