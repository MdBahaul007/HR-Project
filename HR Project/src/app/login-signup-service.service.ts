/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';

export interface User{
  email: any;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginSignupServiceService {
  currentUser: User=null;

  constructor(private fireAuth: AngularFireAuth, private firestone: AngularFirestore) {
    //subscribing to auth state chaged i.e this will kep on checking when the user is auththeciated i.e when the user state chaged from non-authetic user to authetic user.
    this.fireAuth.onAuthStateChanged(user =>{
      console.log(user);
      this.currentUser=user;
    });
  }

  signIn({email,password}){
    //for signIn we will use reactive form and signIn will take email and password.
    return this.fireAuth.signInWithEmailAndPassword(email,password);//here passing whole form value i.e email and password to our signIn function.

  }


}
