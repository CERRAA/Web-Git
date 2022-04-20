import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  constructor() { }

  repo:any
  submitRepo(){
    console.log(this.repo)
  }
  ngOnInit(): void {
  }

}
