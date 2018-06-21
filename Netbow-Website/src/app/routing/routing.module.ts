import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { MovieScreenComponent } from '../movie-screen/movie-screen.component';

const routes: Routes = [
    {path: 'auth ', component: MainComponent},
    {path: 'movies', component: MovieScreenComponent},
    { path: ' ', redirectTo: 'auth', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class RoutingModule {

}
