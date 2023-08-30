import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InstructorLoginSignupComponent } from './instructor-login-signup/instructor-login-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructorLoginSignupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
