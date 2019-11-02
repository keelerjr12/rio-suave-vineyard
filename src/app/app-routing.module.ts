import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    data: {title: 'Home'}
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    data: {title: 'Admin'}
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule),
    data: {title: 'Contact'}
  },
  {
    path: 'events',
    loadChildren: () => import('./user-events/user-events.module').then(mod => mod.UserEventsModule),
    data: {title: 'Events'}
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then(mod => mod.LocationModule),
    data: {title: 'Location'}
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
    data: {title: 'Login'}
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
