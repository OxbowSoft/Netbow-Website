import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private auth:AuthService) {

  }
  title = 'app';

  test() {
    this.auth.addUser({userEmail:'sample@gmail.com', userPassword:'sample'});
    console.log('test done');
  }
}