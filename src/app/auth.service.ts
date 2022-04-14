import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseService } from '././firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any | null = null;

  constructor(public afAuth: AngularFireAuth, private firebaseService: FirebaseService, private router: Router) {
    this.afAuth.authState.subscribe((userData) => {
      if(userData) {
        this.setUser(userData);
      } else {
        this.setUser(null);
      }
    });
  }

  signUp(email: string, password: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUser(result.user);
        window.alert("Account successfully created!");
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUser(result.user);
        window.alert("Signed in!");
      })
      .catch((error) => {
        window.alert("Invalid username or password");
      });
  }

  signOut() {
    this.afAuth
      .signOut()
      .then(() => {
        this.setUser(null);
        window.alert("Signing out");
      });
  }

  setUser(userData: any) {
    if(userData) {
      this.user = {
        uid: userData.uid,
        email: userData.email,
        isAdmin: false,
        isFlagged: false,
        banTime: 0
      };
    } else {
      this.user = null;
    }

    localStorage.setItem('user', JSON.stringify(userData));
  }

  getUser() {
    this.user = JSON.parse(localStorage.getItem('user')!);

    return this.user;
  }

  isLoggedIn() {
    return this.user != null;
  }

}
