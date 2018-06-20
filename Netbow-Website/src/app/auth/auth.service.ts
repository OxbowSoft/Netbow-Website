import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './models/user.model';
import { authData } from './models/authData.model';

@Injectable()
export class AuthService {
  private _user:User;
  private _auth;

  public isLoggedIn:boolean;

  constructor(private auth:AngularFireAuth) { 
    this._auth = this.auth.auth;

    this._auth.onAuthChanged( user => {
      if(user) {
        this.isLoggedIn = true;
      }
      else {
        this.isLoggedIn = false;
      }
    })
  }

  addUser(authData:authData) {
     this._user = {
       email: authData.userEmail,
       password: authData.userPassword // póxniej musimy dodać hasha na hasło!
     }

     this._auth.createUserWithEmailAndPassword(this._user.email, this._user.password)
      .then( response => {return})
      .catch(error => console.log(error));
  }

  login(authData:authData) {
    this._auth.signInWithEmailAndPassword(authData.userEmail, authData.userPassword)
    .then( response => this.isLoggedIn = true)
    .catch(error => console.log(error));
  }

  logout() {
    this._auth.signOut()
    .then( response => this.isLoggedIn = false)
    .catch(error => console.log(error))
  }
}
