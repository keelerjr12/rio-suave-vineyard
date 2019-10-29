import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule),
    data: {title: 'Home'}
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(mod => mod.AdminModule),
    data: {title: 'Admin'}
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(mod => mod.ContactModule),
    data: {title: 'Contact'}
  },
  {
    path: 'events',
    loadChildren: () => import('./modules/user-events/user-events.module').then(mod => mod.UserEventsModule),
    data: {title: 'Events'}
  },
  {
    path: 'location',
    loadChildren: () => import('./modules/location/location.module').then(mod => mod.LocationModule),
    data: {title: 'Location'}
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule),
    data: {title: 'Login'}
  },
  {
    path: 'story',
    loadChildren: () => import('./modules/story/story.module').then(mod => mod.StoryModule),
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
