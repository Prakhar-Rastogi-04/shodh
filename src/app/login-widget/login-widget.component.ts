import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MySignInComponent } from '../my-sign-in/my-sign-in.component'

@Component({
  selector: 'app-login-widget',
  templateUrl: './login-widget.component.html',
  styleUrls: ['./login-widget.component.css']
})
export class LoginWidgetComponent implements OnInit {
  animal: string;
  name: string;
  uname:string;
  uage: number;
  sal:string;
  key:string;
  dialogResult ="";

  constructor( public dialog: MatDialog ) { }
  openDialog(): void {
    let dialogRef = this.dialog.open(MySignInComponent, {
      width: 'auto',
      data: {key:this.key, name: this.name, uname: this.uname, uage: this.uage, sal: this.sal }
    });

    dialogRef.afterClosed().subscribe(result => {
      // debugger;
      console.log(result);
      this.dialogResult = result;
    });
  }
  ngOnInit() {
  }

}
