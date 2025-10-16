import { NgModule } from '@angular/core';
import { HeaderComponent } from './app/header/header.component';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HeaderComponent, AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule],
})
export class AppModule {}
