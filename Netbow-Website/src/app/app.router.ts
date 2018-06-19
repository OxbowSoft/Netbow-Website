
import { MovieScreenComponent } from './movie-screen/movie-screen.component';

export const routes = [
    {path: 'movies', component: MovieScreenComponent},
    { path: '', redirectTo: 'movies', pathMatch: 'full' },
];
