import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MailingListComponent } from './components/mailing-list/mailing-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactModule } from './modules/contact/contact.module';
import { HomeModule } from './modules/home/home.module';
import { LocationModule } from './modules/location/location.module';
import { StoryModule } from './modules/story/story.module';
import { ToastrModule } from 'ngx-toastr';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { LoginModule } from './modules/login/login.module';
import { EventsModule } from './modules/events/events.module';
import { AuthInterceptor } from './http-interceptors/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    MailingListComponent,
    NavbarComponent,
    FooterComponent,
    SitemapComponent,
    SocialMediaComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ContactModule,
    EventsModule,
    HomeModule,
    LocationModule,
    LoginModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoryModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
