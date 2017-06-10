import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  AngularFireDatabase
} from 'angularfire2/database';

import * as firebase from 'firebase/app';

const FAVORITE_THINGS_PATH = 'favoriteThings';
const COLOR_PATH = 'color';
const NUMBER_PATH = 'number';
const VALUE = 'value';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Favorite Things';
  favoriteColor = 'gray';
  favoriteNumber = 0;
  firebaseDB = firebase.database().ref(FAVORITE_THINGS_PATH)

  constructor(db: AngularFireDatabase) {

  }

  ngOnInit(): void {
    this.firebaseDB.child(COLOR_PATH).on(VALUE, (snapshot: firebase.database.DataSnapshot) => {
       this.favoriteColor = snapshot.val();
    });
    this.firebaseDB.child(NUMBER_PATH).on(VALUE, (snapshot: firebase.database.DataSnapshot) => {
      this.favoriteNumber = snapshot.val();
    });
  }

  ngOnDestroy(): void {
    this.firebaseDB.off();
  }


  setColor(color: string): void {
    this.firebaseDB.child(COLOR_PATH).set(color);
  }

  setNumber(number: number): void {
    this.firebaseDB.child(NUMBER_PATH).set(number);
  }
}
