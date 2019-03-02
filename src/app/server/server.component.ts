import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowedNewServer = false;
  serverCreated = "No server Was Created";
  updatedServer = '';

  constructor() { 
    setTimeout(() => {
      this.allowedNewServer = true;
    }, 3000);
  }

  onServerSubmit(){
    this.serverCreated = "Server Created SuccessFully";
  }

  onServerUpdated(event: Event){
    this.updatedServer = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
