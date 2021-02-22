import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit{
  fileToUpload: any;
  imageUrl: any;
  // fileToUpload: any = null;
  ngOnInit() {

  }
  onFileChange(files: any) {
    this.fileToUpload = files.item(0);
        //Show image preview
        let reader = new FileReader();
        reader.onload = (event: any) => {
          this.imageUrl = event.target.result;
          console.log(this.imageUrl);
        }
    reader.readAsDataURL(this.fileToUpload);
  }
}
