import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { UserinputComponent } from './userinput/userinput.component';
import { ResumeComponent } from './resume/resume.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResumeDetailsService } from './resume-details.service';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    UserinputComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'loader' },
      { path: 'loader', component: LoaderComponent },
      { path: 'userinput', component: UserinputComponent },
      { path: 'resume', component: ResumeComponent }
    ])
  ],
  providers: [ResumeDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
