import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { AboutComponent } from '../../pages/about/about.component';


const bodyRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(bodyRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BodyRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent];