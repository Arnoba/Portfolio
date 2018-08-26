import { NgModule } from '@angular/core';
import { BodyComponent } from './body.component';
import { BodyRoutingModule } from './body.routing.module';


@NgModule({
  declarations: [BodyComponent
  ],
  imports: [BodyRoutingModule],
  exports: [BodyComponent]
})
export class BodyModule { }
