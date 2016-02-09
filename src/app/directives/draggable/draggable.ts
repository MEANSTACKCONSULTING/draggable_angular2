import {Directive, ElementRef} from 'angular2/core';

@Directive({
  selector: '[draggable]',
  host: {
    '(mousedown)': 'onMouseDown($event)',
    '(mouseup)': 'onMouseUp($event)',
    '(mousemove)': 'move($event)'
  }
})
export class Draggable{
  constructor(private el: ElementRef){
    this.el.nativeElement.style.position = 'relative';
  }

  private startX: number = 0;
  private startY: number = 0;
  private x: number = 0;
  private y: number = 0;
  private enableToMove: boolean = false;

  onMouseDown( event ){
    event.preventDefault();
    this.startX = event.pageX - this.x;
    this.startY = event.pageY - this.y;
    this.enableToMove = true;
  }
  onMouseUp(){
    this.enableToMove = false;
  }

  move( event ){
    if (this.enableToMove){
      this.y = event.pageY - this.startY;
      this.x = event.pageX - this.startX;
      console.log(this.el.nativeElement.style);
      this.el.nativeElement.style.top = this.y + 'px';
      this.el.nativeElement.style.left = this.x + 'px';
    }
  }
}
