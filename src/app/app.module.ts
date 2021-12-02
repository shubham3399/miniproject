import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import { UsersModule } from './users/users.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VerificationGuard } from './guards/verification.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    UsersModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
 
  providers: [
    VerificationGuard,
  {
   provide:HTTP_INTERCEPTORS,
   useClass:TokenInterceptorService,
   multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
