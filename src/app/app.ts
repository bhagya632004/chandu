import { Component} from '@angular/core';
import { First } from './component/first/first';

@Component({
  selector: 'app-root',
  imports: [First],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

