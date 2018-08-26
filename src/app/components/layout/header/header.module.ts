import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '../../../../../node_modules/@angular/router';


@NgModule({
  declarations: [HeaderComponent
  ],
  imports: [ RouterModule.forChild([]) ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
