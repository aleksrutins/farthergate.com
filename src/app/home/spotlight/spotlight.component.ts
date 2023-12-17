import { Component, Inject } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-spotlight',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './spotlight.component.html',
  styleUrl: './spotlight.component.scss'
})
export class SpotlightComponent {
  constructor(protected projects: ProjectsService) {}
}
