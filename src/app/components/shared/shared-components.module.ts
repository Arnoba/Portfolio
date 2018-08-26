import { NgModule } from '@angular/core';
import { CollectionComponent } from './collection';
import { ElementComponent } from './element';
import { CommonModule } from '../../../../node_modules/@angular/common';


@NgModule({
    declarations: [
        CollectionComponent,
        ElementComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ElementComponent,
        CollectionComponent
    ]
})
export class SharedComponentsModule {}