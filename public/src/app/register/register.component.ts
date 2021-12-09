import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../user-m/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser:any = {
    firstname : "",
    lastname : "",
    username : "",
    password : ""
  }

  confpassword:any = ""

//*Validations side-------------------------------------------------------------------------
  isValid:Boolean = true;

  errors:any = {
    firstnamelen : "",
    lastnamelen : "",
    passlen : "",
    confpassmjs : "",
    usernameexits: "",
    empty: ""
  }
//*Validations side-------------------------------------------------------------------------


  constructor(private _HttpService: UserService,
              private _router:Router,
              private _route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  register(event:any):void{

//!Validations side-------------------------------------------------------------------------

this.isValid = true;

  this.errors = {
    firstnamelen : "",
    lastnamelen : "",
    passlen : "",
    confpassmjs : "",
    usernameexits: "",
    empty: ""
  }

  if(this.newUser.firstname.length == 0 || 
  this.newUser.lastname.length == 0 ||
  this.newUser.username.length == 0 ||
  this.newUser.password.length == 0){
    this.isValid = false;
    this.errors.empty = "You leaved an empty space"
  }

  if(this.newUser.firstname.length < 3){
    this.isValid = false;
    this.errors.firstnamelen = "You need at least 3 characters for firstname"
  }

  if(this.newUser.lastname.length < 3){
    this.isValid = false;
    this.errors.lastnamelen = "You need at least 3 characters for lastname"
  }

  if(this.newUser.password.length < 8){
    this.isValid = false;
    this.errors.passlen = "You need at least 8 characters for password"
  }
  if(this.newUser.password !== this.confpassword){
    this.isValid = false;
    this.errors.confpassmjs = "The passwords does not match"
  }

//!Validations side-------------------------------------------------------------------------end

    if(this.isValid){
        this._HttpService.createNewUser(this.newUser)
        .subscribe((data:any)=>{

          sessionStorage.setItem('userID', data._id); //! Session In
          sessionStorage.setItem('userFirstname', data.firstname); //! Session In
          sessionStorage.setItem('userLastname', data.lastname); //! Session In
          sessionStorage.setItem('userUsername', data.email); //! Session In
          this._router.navigate( ['/home'] );
        },
        (error:any) =>{
          console.log(error);
          this.errors.usernameexits = "This username is already in use"
        })
    }
    else{
      console.log("Ups");
      
    }
  }
}
