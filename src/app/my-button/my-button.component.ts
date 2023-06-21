
//my-button.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
})
export class MyButtonComponent {
  @Output() changeColor: EventEmitter<string> = new EventEmitter<string>();

  onButtonClick(): void{
    const newColor: string='yellow';
    this.changeColor.emit(newColor);
  }
}
