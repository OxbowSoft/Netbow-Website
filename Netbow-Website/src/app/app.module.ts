import { UiModule } from './ui/ui.module';
import { MovieService } from './services/movie-service/movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainComponent } from './main/main.component';
import { MovieScreenComponent } from './movie-screen/movie-screen.component';
import { TilesModule } from './movie-screen/tiles/tiles.module';
import { environment } from '../environments/environment';
import { RoutingModule } from './routing/routing.module';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    MainComponent,
    MovieScreenComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    TilesModule,
    ReactiveFormsModule,
    HttpModule,
    UiModule,
    RoutingModule
  ],
  providers: [AuthService, MovieService],
  bootstrap: [MainComponent]
  })
export class AppModule { }
