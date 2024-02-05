import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

skills:any =[]
  constructor(private service:GlobalService){
    this.getSkillsData()

  }
ngOnInit(): void {
this.getSkillsData()

}
// get skills data from assets/skills.json
getSkillsData(){
  this.service.getskills().subscribe((res:any)=>{
    this.skills = res.skills
    console.log(this.skills)
        })
      }



}

