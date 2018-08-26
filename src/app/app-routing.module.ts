import { NgModule } from '@angular/core';
import { HomeComponent } from './components/pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    // #{path: 'home', component: HomeComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent];