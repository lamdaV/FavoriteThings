import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase/app';

const FAVORITE_THINGS_PATH = 'favoriteThings';
const COLOR_PATH = 'color';
const VALUE = 'value';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorite Things';
  favoriteColor = 'gray';
  favoriteNumber = 0;
  firebaseDB = firebase.database().ref(FAVORITE_THINGS_PATH).child(COLOR_PATH);

  constructor(db: AngularFireDatabase) {
  }

  setColor(selectedColor: string): void {
    this.firebaseDB.set(selectedColor);
  }

  updateColor(): void {
    this.firebaseDB.once(VALUE, (snapshot: firebase.database.DataSnapshot) => {
      this.favoriteColor = snapshot.val();
    });
  }

  setNumber(number: number): void {
    this.favoriteNumber = number;
  }
}
