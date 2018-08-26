import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { AboutComponent } from '../../pages/about/about.component';
import { ContactComponent } from '../../pages/contact/contact.component';
import { GalleryComponent } from '../../pages/gallery';
import { ProjectListComponent } from '../../pages/projects';
import { SketchbookListComponent } from '../../pages/sketchbooks';


const bodyRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'projects',  component: ProjectListComponent },
  { path: 'sketchbooks',  component: SketchbookListComponent },
  { path: 'gallery',  component: GalleryComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact',  component: ContactComponent }
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
export const routingComponents = [
  HomeComponent,
  AboutComponent,
  ContactComponent,
  GalleryComponent,
  SketchbookListComponent
];