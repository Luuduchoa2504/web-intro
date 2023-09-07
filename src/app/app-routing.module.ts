import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {MyAccountComponent} from "./pages/my-account/my-account.component";
import {ServicesComponent} from "./pages/services/services.component";

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'gioi-thieu',
    component: AboutUsComponent
  },
  {
    path: 'dich-vu',
    component: ServicesComponent
  },
  {
    path: 'lien-he',
    component: ContactUsComponent
  },
  {
    path: 'myaccount',
    component: MyAccountComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
