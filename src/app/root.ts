import {Component} from 'angular2/core';


@Component({
  selector: 'root-app',
  providers: [],
  templateUrl: 'app/root.html',
  directives: [],
  pipes: []
})
export class RootApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
