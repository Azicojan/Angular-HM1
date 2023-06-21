import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-app';
  backgroundColor: string = 'white';
  text = 'Hello world!';
  color: string = 'red';

  onBackgroundColorChange(color: string): void {
    this.backgroundColor = this.backgroundColor === 'white' ? 'yellow' : 'white';

  }
  onColorChange(color: string): void {

    this.color = this.color === 'blue' ? 'red': 'blue';
  }
}
