import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SingleauthorComponent } from './singleauthor/singleauthor.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { UpdateauthorsComponent } from './updateauthors/updateauthors.component';
import { UpdatebooksComponent } from './updatebooks/updatebooks.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'home',component:HomeComponent},
  {path:'books',component:BooksComponent},
  {path:'book',component:SinglebookComponent},
  {path: 'authors',component:AuthorsComponent},
  {path: 'addbook' ,canActivate:[AuthGuard], component:AddbookComponent},
  {path: 'addauthor' ,canActivate:[AuthGuard],component:AddauthorComponent},
  {path:'updatebook',component:UpdatebooksComponent},
  {path:'updateauthor',component:UpdateauthorsComponent},
  {path:'updateauthor',component:UpdateauthorsComponent},
  {path:'singlebook',component:SinglebookComponent},
  {path:'singleauthor',component:SingleauthorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
