import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-element',
    styleUrls: [ './element.component.scss' ],
    templateUrl: './element.component.html'
})
export class ElementComponent {
    @Input() imageSrc;
    @Input() text;

}