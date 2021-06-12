import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeDetailsService } from '../resume-details.service';

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css']
})
export class UserinputComponent implements OnInit {
  experience: any[]=[];
  education: any[]=[];
  skills: any[]=[];
  sociallinks: any[]=[];
  interests: any[]=[];
  languages: any[]=[];
  storage: any[]=[];

  constructor(private router: Router, private service: ResumeDetailsService) { }

  ngOnInit(): void {
  }
  submitForm(data: any){
    console.log(this.storage);
    this.storage.push(data)
    this.service.sendData(this.storage)
    this.router.navigate(['/resume'])
  }
  addexperience(){
    this.experience.push({value:""})
  }
  removeexperience(i: any){
    this.experience.splice(i,1)
  }
  addeducation(){
    this.education.push({value:""})
  }
  removeeducation(i: any){
    this.education.splice(i,1)
  }
  addskills(){
    this.skills.push('')
  }
  removeskills(i: any){
    this.skills.splice(i,1)
  }
  addsociallinks(){
    this.sociallinks.push('')
  }
  removesociallinks(i: any){
    this.sociallinks.splice(i,1)
  }
  addinterests(){
    this.interests.push({value:""})
  }
  removeinterests(i: any){
    this.interests.splice(i,1)
  }
  addlanguages(){
    this.languages.push({value:""})
  }
  removelanguages(i: any){
    this.languages.splice(i,1)
  }
}
