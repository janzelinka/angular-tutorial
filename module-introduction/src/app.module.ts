import { NgModule } from '@angular/core';
import { HeaderComponent } from './app/header/header.component';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserInputComponent } from './app/user-input/user-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, AppComponent, UserInputComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
