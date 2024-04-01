import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {TestService} from "./test.service";
import {TestComponent} from "./test.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inject-migtation-example';

  constructor(private testService: TestService){
  }
}
