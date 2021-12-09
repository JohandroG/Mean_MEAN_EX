import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private _http: HttpClient) { }


  create(newPoll:any){
    return this._http.post("http://localhost:8080/polls/create",newPoll)
  }

  allpolls(){
    return this._http.get("http://localhost:8080/polls/all")
  }

  findpoll(poll_id:any){
    return this._http.get(`http://localhost:8080/polls/find/${poll_id}`)
  }

  incrementvote1(poll_id:any){
    return this._http.post("http://localhost:8080/polls/vote1",poll_id)
  }

  incrementvote2(poll_id:any){
    return this._http.put("http://localhost:8080/polls/vote2",poll_id)
  }

  incrementvote3(poll_id:any){
    return this._http.put("http://localhost:8080/polls/vote3",poll_id)
  }

  incrementvote4(poll_id:any){
    return this._http.put("http://localhost:8080/polls/vote4",poll_id)
  }

  deletePoll(poll_id:any){
    return this._http.delete(`http://localhost:8080/polls/delete/${poll_id}`)
  }


  
}
