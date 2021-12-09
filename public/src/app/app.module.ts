import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserMComponent } from './user-m/user-m.component';
import { UserService } from './user-m/user.service';
import { PollService } from './createpoll/poll.service';
import { HomeComponent } from './home/home.component';
import { CreatepollComponent } from './createpoll/createpoll.component';
import { ShowpollComponent } from './showpoll/showpoll.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserMComponent,
    HomeComponent,
    CreatepollComponent,
    ShowpollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService,PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
