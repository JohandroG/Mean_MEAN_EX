import { Component, OnInit } from '@angular/core';
import {UserService} from '../user-m/user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo:any = {
    username : "",
    password : ""
  }


//*Validations side-------------------------------------------------------------------------
isValid:Boolean = true;

errors:any = {
  wrongpass : "",
  noexits : "",
  empty: ""
}
//*Validations side-------------------------------------------------------------------------


  constructor(private _HttpService: UserService,
              private _router:Router,
              private _route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  loginProcess(event:any):void{

    this.isValid = true;

//!Validations side-------------------------------------------------------------------------
this.isValid = true;

this.errors = {
  others : "",
  empty: ""
}

if(this.loginInfo.username.length == 0 ||
  this.loginInfo.password.length == 0){
    this.isValid = false;
    this.errors.empty = "You leaved an empty space"
  }


//!Validations side-------------------------------------------------------------------------


    if(this.isValid){
      this._HttpService.login(this.loginInfo)
    .subscribe((data:any) =>{
      console.log("success");
      
      sessionStorage.setItem('userID', data._id); //! Session In
      sessionStorage.setItem('userFirstname', data.firstname); //! Session In
      sessionStorage.setItem('userLastname', data.lastname); //! Session In
      sessionStorage.setItem('userUsername', data.email); //! Session In
      this._router.navigate( ['/home'] );
    },
    (error:any)=>{
      this.errors.others = error.statusText
    })
    }
    else{
      console.log("Sorry");
    }
    
    
  }

}
