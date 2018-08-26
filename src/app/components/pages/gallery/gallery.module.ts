import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';

@NgModule({
    declarations: [GalleryComponent],
    exports: [GalleryComponent]
})
export class GalleryModule {}