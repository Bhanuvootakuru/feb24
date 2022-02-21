import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path:"home", component:HomeComponent
  },
  {
    path: "",
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: "Contact-us", component: ContactusComponent
  },

  { 
    path: "Profile", component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
