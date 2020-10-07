import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Hi';
  serverName = 'Test Server';
  userName = '';
  userNameStatus = '';
  serverStatus = false;
  serverCreated = false;
  buttonSwitch = false;
  
  buttonLog = [];
  servers = ['Testserver', 'Testserver 2'];
  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created, Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUserName()
  {
    if(this.userName.length > 0){
      this.serverStatus = true;
    this.userNameStatus = this.userName + 'Created';
    }
  }

  displayParagraph()
  {
    this.buttonSwitch = !this.buttonSwitch;
    console.log(this.buttonLog.length + 1);
    this.buttonLog.push(new Date());
  }

  onUpdateServerName(event:any){
    console.log(event);
    this.serverName = event.target.value;
  }

}
