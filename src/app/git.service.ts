import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repo } from './repo';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor( private http:HttpClient) { 
      		this.User = new User("","","","","","","","","");

  }
User: User
repo:Repo

getUser(username: string){


  interface ApiResponse{
        login:any, 
        avatar_url:any,
        followers:any,
        created_at:any,
        updated_at:any,
        email:any,
        name:any,
        following:any,
        id:any,
    }

    let promise =new Promise<void>((resolve,reject)=>{
      
       return this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
                  this.User.login=response?.login
                  this.User.avatar_url=response?.avatar_url
                  this.User.followers=response?.followers
                  this.User.created_at=response?.created_at
                  this.User.updated_at=response?.updated_at
                  this.User.email=response?.email
                  this.User.name=response?.name
                  this.User.following=response?.following
                  this.User.id=response?.id
            resolve()
        },
        error=>{
                reject(error)
            })
          })
        return promise

}
getRepo(username: string):Observable<any>{  
       return this.http.get<any[]>("https://api.github.com/users/" + username + "/repos");
}
}
