import { NgModule } from '@angular/core';
import { BodyComponent } from './body.component';
import { BodyRoutingModule, routingComponents } from './body.routing.module';


@NgModule({
  declarations: [
    BodyComponent,
    routingComponents
  ],
  imports: [BodyRoutingModule],
  exports: [BodyComponent]
})
export class BodyModule { }
