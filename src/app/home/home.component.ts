import { Component } from '@angular/core';
import { SpotlightComponent } from './spotlight/spotlight.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SpotlightComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
