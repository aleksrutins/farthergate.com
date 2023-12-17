import { Injectable } from '@angular/core';
import projects from '../data/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  #projects = projects

  featured = () => this.#projects.featured

  constructor() { }
}
