import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog/:id', component: BlogPostComponent },
    { path: '**', component: NotFoundComponent },
];
