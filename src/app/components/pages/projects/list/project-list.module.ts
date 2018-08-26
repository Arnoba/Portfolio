import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list.component';
import { SharedComponentsModule } from '../../../shared';

@NgModule({
    declarations: [
        ProjectListComponent
    ],
     imports: [
        SharedComponentsModule
     ],
    exports: [
        ProjectListComponent
    ]
})
export class ProjectListModule {}