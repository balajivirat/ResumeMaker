import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ResumeDetailsService {
  store: any[]=[];

  constructor() { }

  sendData(data: any){
    console.log(data);
    this.store=data;
  }

  getData(){
    return this.store;
  }
    
  
}
