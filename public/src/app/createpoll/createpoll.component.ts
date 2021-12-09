import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PollService} from '../createpoll/poll.service';

@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css']
})
export class CreatepollComponent implements OnInit {


//*Validations side-------------------------------------------------------------------------
isValid:Boolean = true;

errors:any = {
  queslen : "",
  oplen : "",
  empty: ""
}
//*Validations side-------------------------------------------------------------------------

  id:any = "";
  firstname:any = "";
  lastname:any = "";
  username:any = "";

  newpoll:any = {
    question : "",
    creator : "",
    creatorname: "",
    option1: "",
    option2: "",
    option3: "",
    option4: ""
  }


  constructor(private _router:Router,
    private _route:ActivatedRoute,
    private _HttpService: PollService) { }


  ngOnInit(): void {
    this.loadsessioninfo()
  }

  loadsessioninfo():void{

    const userFirstname = sessionStorage.getItem('userFirstname');
    const userID = sessionStorage.getItem('userID');
    const userLastname = sessionStorage.getItem('userLastname');
    const userUsername = sessionStorage.getItem('userUsername');
    
    if (!userFirstname){
      this._router.navigate( ['/'] );
    }
    
    this.id = userID
    this.firstname = userFirstname
    this.lastname = userLastname
    this.username = userUsername
    }
  
    createnewPoll(event:any):void{

//!Validations side-------------------------------------------------------------------------
this.isValid = true;

this.errors = {
  queslen : "",
  oplen : "",
  empty: ""
}

if(this.newpoll.question.length == 0 ||
  this.newpoll.option1.length == 0 ||
  this.newpoll.option2.length == 0 ||
  this.newpoll.option3.length == 0 ||
  this.newpoll.option4.length == 0 ){
    this.isValid = false;
    this.errors.empty = "You leaved an empty space"
  }

  if(this.newpoll.question.length < 8){
    this.isValid = false;
    this.errors.queslen = "You need at least 8 characters for question"
  }

  if(this.newpoll.option1.length < 3 ||
    this.newpoll.option2.length < 3 ||
    this.newpoll.option3.length < 3 ||
    this.newpoll.option4.length < 3){
    this.isValid = false;
    this.errors.oplen = "You need at least 3 characters for all options"
  }

//!Validations side-------------------------------------------------------------------------








if(this.isValid){
  const userFirstname = sessionStorage.getItem('userFirstname');
      const userID = sessionStorage.getItem('userID');
      this.newpoll.creator = userID
      this.newpoll.creatorname = userFirstname

      this._HttpService.create(this.newpoll)
      .subscribe((data:any)=>{
        this._router.navigate( ['/home'] );
      })
}
else{
  console.log("Nope");
}

    }



}
