import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:any =[]
  constructor(private service:GlobalService){
    this.getProjects()
  }

ngOnInit(): void {
  this.getProjects()
}
  getProjects(){
this.service.getProjects().subscribe((res:any)=>{
  this.projects = res.projects
})
  }
}
