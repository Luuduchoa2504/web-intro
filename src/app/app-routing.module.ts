import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";

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
    path: 'lien-he',
    component: ContactUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
