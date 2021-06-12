import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ResumeDetailsService } from '../resume-details.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  store: any[]=[];

  @ViewChild('content')
  content!: ElementRef;
  constructor(public service: ResumeDetailsService) { }

  ngOnInit(): void {
    this.store = this.service.getData()
    console.log(this.store);
    }

    public openPDF():void {
      let DATA = document.getElementById('content')!;
          
      html2canvas(DATA).then(canvas => {
          
          let fileWidth = 208;
          let fileHeight = canvas.height * fileWidth / canvas.width;
          
          const FILEURI = canvas.toDataURL('image/png')
          let PDF = new jsPDF('p', 'mm', 'a4');
          let position = 0;
          PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
          
          PDF.save('angular-demo.pdf');
      });     
      }
}
