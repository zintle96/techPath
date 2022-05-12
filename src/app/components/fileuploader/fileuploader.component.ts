import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask  } from '@angular/fire/storage';   //   import <<<<

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.scss']
})
export class FileuploaderComponent implements OnInit {

  constructor( private fireStorage: AngularFireStorage) { }   // Inject <<<<<

  basePath = '/images';                       //  <<<<<<<
  downloadableURL : any = '';                      //  <<<<<<<
  task: AngularFireUploadTask | undefined;               //  <<<<<<<

  ngOnInit(): void {
  }
  
// File uploaded when triggered

  async onFileChanged(event: any) {
   const file = event.target.files[0];
   if (file) {
      const filePath = `${this.basePath}/${file.name}`;  // path at which image will be stored in the firebase storage
      this.task =  this.fireStorage.upload(filePath, file);    // upload task

      // this.progress = this.snapTask.percentageChanges();


      (await this.task).ref.getDownloadURL().then(url => {this.downloadableURL = url; });  // <<< url is found here



    } else {  
      alert('No images selected');
      this.downloadableURL = ''; }



  }
}
