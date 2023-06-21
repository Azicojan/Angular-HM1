import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-info-button',
  templateUrl: './my-info-button.component.html',
  styleUrls: ['./my-info-button.component.css']
})
export class MyInfoButtonComponent {
  @Output() changeColor: EventEmitter<string> = new EventEmitter<string>();

  onButtonClick(): void{
    const newColor: string='red';
    this.changeColor.emit(newColor);
  }
}
