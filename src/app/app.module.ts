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

const APP_CONTAINERS = [
  HomepageComponent,
  ContactUsComponent,
  AboutUsComponent,
]

const APP_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SignUpNewsletterComponent
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
