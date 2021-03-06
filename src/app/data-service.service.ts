import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {
 private isUserLoggedIn;
  constructor(private http:Http) { 
    this.isUserLoggedIn=false;
  }
  setIsUserLoggedIn(){
    this.isUserLoggedIn=true;
  }
  getIsUserLoggedIn(){
    return this.isUserLoggedIn;
  }
  adminLogin(data){
      
     let link = "https://uiubloodbank.ml/API/admin_login.php";
     return this.http.post(link,data)
     .map(res =>res.json());
    
    }

    delete(data){
      let link = "https://uiubloodbank.ml/API/deleteUser.php";
     return this.http.post(link,data)
     
    }

    showUser(){
      return this.http.get('https://www.uiubloodbank.ml/API/fetchUserForAdmin.php')
      .map(res =>res.json());
    }

}
