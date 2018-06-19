import { UiModule } from './ui/ui.module';
import { MovieService } from './services/movie-service/movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.router';

import { MainComponent } from './main/main.component';
import { MovieScreenComponent } from './movie-screen/movie-screen.component';
import { TilesModule } from './movie-screen/tiles/tiles.module';


@NgModule({
  declarations: [
    MainComponent,
    MovieScreenComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    TilesModule,
    ReactiveFormsModule,
    HttpModule,
    UiModule
  ],
  providers: [MovieService],
  bootstrap: [MainComponent]
})
export class AppModule { }
