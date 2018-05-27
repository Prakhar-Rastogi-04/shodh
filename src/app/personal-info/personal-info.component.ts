import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.callAllInfo();
    console.log('ok');
  }
  callAllInfo = function () {
    // alert ('func called!');
    this.http.get('https://raw.githubusercontent.com/Prakhar-Rastogi-04/shodh/master/my-personal-details.json')
    .subscribe(
      (data:any[]) => {
        // debugger;
        console.log(data);
        this.personalData = data;
        // data.profIntro.user
        console.log(this.personalData.profIntro.user)
       
      }
    )
  }

}
