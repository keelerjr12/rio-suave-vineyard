import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { MailingListComponent } from './shared/components/mailing-list/mailing-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SitemapComponent } from './shared/components/sitemap/sitemap.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { LocationModule } from './location/location.module';
import { StoryModule } from './story/story.module';
import { ToastrModule } from 'ngx-toastr';
import { SocialMediaComponent } from './shared/components/social-media/social-media.component';
import { LoginModule } from './login/login.module';
import { AuthInterceptor } from './shared/http-interceptors/auth-interceptor';
import { UserEventsModule } from './user-events/user-events.module';
import { CoreModule } from './core/core.module';

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
    CoreModule.forRoot(),
    UserEventsModule,
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
