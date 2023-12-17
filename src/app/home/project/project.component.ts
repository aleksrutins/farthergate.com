import { Component, Input, Signal, computed } from '@angular/core';
import { Project } from '../../../data/projects';
import { LangleyResponse, LangleyService } from '../../langley.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input({ required: true }) projectSite!: string
  project!: Project;
  languages$!: Observable<LangleyResponse | undefined>;
  totalCode$!: Observable<number | undefined>;

  constructor(private langley: LangleyService, private projects: ProjectsService) {}
  ngOnInit() {
    this.project = this.projects.featured().find(p => p.site == this.projectSite)!

    this.languages$ = this.langley.fetchLanguages(this.project.github ?? '')
    this.totalCode$ = this.languages$.pipe(map(v => v?.reduce((prev, curr) => prev + curr.amount, 0)))
  }
}
