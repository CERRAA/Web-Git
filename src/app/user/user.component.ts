import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private service:GitService) { 
    
  }
user:any

User:User

submitUser(){
  this.service.getUser(this.user)
  
}
  ngOnInit(): void {
    this.User=this.service.User
  }

}
