import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { UpdatebooksComponent } from './updatebooks/updatebooks.component';
import { UpdateauthorsComponent } from './updateauthors/updateauthors.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { SingleauthorComponent } from './singleauthor/singleauthor.component';
import { FooterComponent } from './footer/footer.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserService } from './user.service';
import { BookserviceService } from './bookservice.service';
import { AuthorserviceService } from './authorservice.service';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BooksComponent,
    AuthorsComponent,
    UpdatebooksComponent,
    UpdateauthorsComponent,
    AddbookComponent,
    AddauthorComponent,
    SinglebookComponent,
    SingleauthorComponent,
    FooterComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BookserviceService, UserService, AuthorserviceService, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
