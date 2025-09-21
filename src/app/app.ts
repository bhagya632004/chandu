import { Component} from '@angular/core';
import { First } from './component/first/first';
import { Second } from './component/second/second';

@Component({
  selector: 'app-root',
  imports: [First,Second],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

