import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  constructor(private service:GitService) { }

  repo:any
  public Repo:Repo[]
  submitRepo(){
  this.service.getRepo(this.repo).subscribe((data)=>{
    this.Repo=data
  })
  }
  ngOnInit(): void {
  }

}
