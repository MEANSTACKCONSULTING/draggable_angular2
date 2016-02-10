import {Directive, ElementRef} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

interface Position{
  x: number;
  y: number;
}

@Directive({
  selector: '[draggable]',
  host: {
    '(mousedown)': 'onMouseDown($event)',
    '(mouseup)': 'onMouseUp($event)'
  }
})
export class Draggable{

  private subcription: any;	// set the correct type

  constructor(private el: ElementRef){
    this.el.nativeElement.style.position = 'relative';
  }

  private startPosition = { x: 0, y: 0 };
  private currentPosition = { x: 0, y: 0 };

  onMouseDown( event ){
    event.preventDefault();
    this.startPosition.x = event.pageX - this.currentPosition.x;
    this.startPosition.y = event.pageY - this.currentPosition.y;
    this.subcription = Observable.fromEvent(document, "mousemove")
      .subscribe((event) => this.move(event));
  }
  onMouseUp(){
    this.subcription.unsubscribe();
  }

  move( event ){
    this.currentPosition.x = event.pageX - this.startPosition.x;
    this.currentPosition.y = event.pageY - this.startPosition.y;
    this.el.nativeElement.style.top = this.currentPosition.y + 'px';
    this.el.nativeElement.style.left = this.currentPosition.x + 'px';
  }
}
