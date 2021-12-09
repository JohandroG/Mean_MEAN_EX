import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PollService} from '../createpoll/poll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

id:any = "";
firstname:any = "";
lastname:any = "";
username:any = "";

allpolls:any[] = [];

poll_id:string = "";

  constructor(private _router:Router,
              private _route:ActivatedRoute,
              private _HttpService: PollService,) { }

  ngOnInit(): void {
    this.loadsessioninfo();
    this.allPolls()
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

logout():void{
  sessionStorage.clear();
  this._router.navigate( ['/'] );
}


allPolls():void{
  this._HttpService.allpolls()
  .subscribe((data:any)=>{
    this.allpolls = data;
  })
}

deletePoll(event:any):void{
  event.preventDefault();
  this.poll_id = event.target.poll_id.value;
  console.log(this.poll_id);
  this._HttpService.deletePoll(this.poll_id)
  .subscribe((data:any) => {
    console.log(data);
  });
  location.reload();
}



}
