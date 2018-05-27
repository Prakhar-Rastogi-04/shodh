import { Component, OnInit, Inject,Output,EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-my-sign-in',
  templateUrl: './my-sign-in.component.html',
  styleUrls: ['./my-sign-in.component.css']
})
export class MySignInComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(
    public dialogRef: MatDialogRef<MySignInComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[]
  ) { }
  // @Output() formData = new EventEmitter();
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  onSaveClick(): void {
    console.log(this.data);
    this.dialogRef.close(this.data);
    // this.formData.emit(this.data);
  }

  ngOnInit() {
    console.log(this.data);
    // this.formData.emit(this.data);
  }

}
