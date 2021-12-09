import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PollService} from '../createpoll/poll.service';

@Component({
  selector: 'app-showpoll',
  templateUrl: './showpoll.component.html',
  styleUrls: ['./showpoll.component.css']
})
export class ShowpollComponent implements OnInit {

voteId:any = {}

  param:any = {};
  poll:any = {};

  constructor(private _router:Router,
    private _route:ActivatedRoute,
    private _HttpService: PollService) { }

  ngOnInit(): void {
    this.loadPoll()
  }


  loadPoll():void{
    this._route.params.subscribe(params => this.param = params)
    console.log(this.param);
    this._HttpService.findpoll(this.param.id)
    .subscribe((data:any)=>{
      this.poll = data
    })
    
  }

  increment1():void{
  this._route.params.subscribe(params => this.param = params)
  this.voteId = {
    id : this.param.id
  }
  this._HttpService.incrementvote1(this.voteId)
  .subscribe((data:any) => {
    console.log(data);
  });
  // this.loadPoll();
  location.reload();
  }

  increment2():void{
  this._route.params.subscribe(params => this.param = params)
  this.voteId = {
  id : this.param.id
  }
  this._HttpService.incrementvote2(this.voteId)
  .subscribe((data:any) => {
  console.log(data);
  });
  // this.loadPoll();
  location.reload();
  }

  increment3():void{
  this._route.params.subscribe(params => this.param = params)
  this.voteId = {
    id : this.param.id
  }
  this._HttpService.incrementvote3(this.voteId)
  .subscribe((data:any) => {
    console.log(data);
  });
  // this.loadPoll();
  location.reload();
  }

  increment4():void{
    this._route.params.subscribe(params => this.param = params)
    this.voteId = {
      id : this.param.id
    }
    this._HttpService.incrementvote4(this.voteId)
    .subscribe((data:any) => {
      console.log(data);
    });
    // this.loadPoll();
    location.reload();
    }

}
