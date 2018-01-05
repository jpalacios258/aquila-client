import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  @ViewChild('fileInput') file;
  showFlag:boolean;
  constructor() { }

  ngOnInit() {
  this.showFlag=false;
  }
  validate(){
    var fileToUpload = this.getFileFromInput(this.file);//this is file
    var fileInput=this.file;//this is view element
     if(!fileToUpload.name.includes('xls')){
      fileInput.nativeElement.value='';
      this.showFlag=true;
     }
  }
  
  upload(){
  }
  getFileFromInput(fileInput) {
    let fi = fileInput.nativeElement;
      if (fi.files && fi.files[0]) {
          var fileToUpload = fi.files[0];
      return fileToUpload;	
    }
    return null;
    }
        
}
