import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  template: `
    <p>
      {{'music-welcome' | translate}}
    </p>
    <p>{{'suggestions' | translate}}</p>
    <ul>
      <li>ANOHNI : {{'music.hopelessness' | translate}}</li>
      <li>Tim Hecker : {{'music.love-streams' | translate}}</li>
      <li>Moon Bros. : {{'music.these-stars' | translate}}</li>
      <li>Jenny Hval : {{'music.blood-bitch' | translate}}</li>
      <li>Nicolas Jaar : {{'music.sirens' | translate}}</li>
    </ul>
  `,
  styles: []
})
export class MusicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
