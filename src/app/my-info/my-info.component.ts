import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent {
  greeting = "Hey, how is it going?"
  name= 'Aziz';
  @Input() color: string = 'red';

}
