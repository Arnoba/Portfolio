import { NgModule } from '@angular/core';
import { BodyComponent } from './body.component';
import { BodyRoutingModule, routingComponents } from './body.routing.module';
import { ProjectListModule } from '../../pages/projects';


@NgModule({
  declarations: [
    BodyComponent,
    routingComponents
  ],
  imports: [BodyRoutingModule, ProjectListModule],
  exports: [BodyComponent]
})
export class BodyModule { }
