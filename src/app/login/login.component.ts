import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rForm: FormGroup;
  submitAttempt: boolean = false;
  responsedata:any;
  result:any;
  constructor(public router:Router, public formBuilder: FormBuilder,
  public service:DataServiceService) {

    this.rForm = formBuilder.group({
        username: ['',Validators.required],
        password:['', Validators.required]
    });
   }

  ngOnInit() {
  }


  login(){
    this.service.adminLogin(this.rForm.value).subscribe(data => {
    this.responsedata=data;
    console.log(this.responsedata);
    this.result=data[0].token;
    if(this.result!="Invalid"){
      this.service.setIsUserLoggedIn();
      this.router.navigate(['/dashboard']);
     }

    });
    
  }

}
