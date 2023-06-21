
//hello-world.components.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
    message = "Hello World!";
    @Input() backgroundColor: string = 'white';


}
