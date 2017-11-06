//core angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//ngPrime
import {ButtonModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {MenubarModule,MenuItem} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {Header} from 'primeng/primeng';

//generated components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule,Routes} from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PiHomePageComponent } from './components/pihome-page/pihome-page.component';
import { LoginComponent } from './components/login/login.component';
//services
const AppRoutes: Routes =[
    {path:'', component:LandingPageComponent},  
    {path:'login', component:LoginComponent},  
    {path:'home', component:PiHomePageComponent},//will have can activate thing   
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingPageComponent,
    LoginComponent,
    PiHomePageComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    ButtonModule,
    InputTextModule,
    MenubarModule,
    DataListModule,
  
    
  ],
  providers: [],   
  bootstrap: [AppComponent]
})
export class AppModule { }
