import { Component } from '@angular/core';
declare var Module: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-wasm';
  word = '';

  constructor() {
  }

  alertWasm(inputWord) {
    Module.greet(inputWord);
  }
}
