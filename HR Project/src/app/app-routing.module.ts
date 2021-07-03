import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login-screen', //for real login
    loadChildren: () => import('./page/login-screen/login-screen.module').then( m => m.LoginScreenPageModule)
  },
  {
    path: 'login', //it is welcome page where user can login or create account
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./page/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./page/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'hr-page',
    loadChildren: () => import('./page/hr-page/hr-page.module').then( m => m.HrPagePageModule)
  },
  {
    path: 'interviewers',
    loadChildren: () => import('./page/interviewers/interviewers.module').then( m => m.InterviewersPageModule)
  },
  {
    path: 'candidate-details',
    loadChildren: () => import('./page/candidate-details/candidate-details.module').then( m => m.CandidateDetailsPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./page/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'know-hr',
    loadChildren: () => import('./page/know-hr/know-hr.module').then( m => m.KnowHrPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
