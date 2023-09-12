import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { GitaAdhyayComponent } from './pages/gita-adhyay/gita-adhyay.component';
import { DnyaneshwariAdhyayComponent } from './pages/dnyaneshwari-adhyay/dnyaneshwari-adhyay.component';
import { OviComponent } from './pages/ovi/ovi.component';
import { ShlokComponent } from './pages/shlok/shlok.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    GitaAdhyayComponent,
    DnyaneshwariAdhyayComponent,
    OviComponent,
    ShlokComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
