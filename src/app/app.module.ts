import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SignUpNewsletterComponent } from './components/sign-up-newsletter/sign-up-newsletter.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { ServicesComponent } from './pages/services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {MaterialModule} from "./modules";

const APP_CONTAINERS = [
  HomepageComponent,
  ContactUsComponent,
  AboutUsComponent,
  ServicesComponent,
  MyAccountComponent,
]

const APP_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SignInComponent,
  SignUpNewsletterComponent,
  SignUpComponent,
]

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    // CollapseModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
