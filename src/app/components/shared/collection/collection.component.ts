import { Component, OnInit } from '@angular/core';
import { Project } from '../entities';

@Component({
    selector: 'app-collection',
    styleUrls: [ './collection.component.scss' ],
    templateUrl: './collection.component.html'
})
export class CollectionComponent implements OnInit {
// TODO get iamge assets from azure blob or something

    images: Array<Project> = [
        new Project( '../../../../assets/images/projects/brown-thomas/bubble-lights-small-scaled.jpg' , 'Spacey Light Bubbles'),
        new Project( '../../../../assets/images/projects/brown-thomas/triangles_optical_illusion_new_small_scaled.jpg',
         'Triangle Optical Illusion'),
        new Project( '../../../../assets/images/projects/brown-thomas/pastels_reflection2_small_scaled.jpg', 'Pastel Reflection'),
        new Project( '../../../../assets/images/projects/brown-thomas/design2_small_scaled.jpg', 'Shattered Mirrow Reflection')
    ];

    ngOnInit(): void {
        console.log(this.images);
    }
}