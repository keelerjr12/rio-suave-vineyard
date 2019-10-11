import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    data: {title: 'Home'}
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule),
    data: {title: 'Contact'}
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then(mod => mod.LocationModule),
    data: {title: 'Location'}
  },
  {
    path: 'story',
    loadChildren: () => import('./story/story.module').then(mod => mod.StoryModule),
    data: {title: 'Story'}
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
