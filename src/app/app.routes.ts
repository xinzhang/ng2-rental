import { Routes } from '@angular/router';

import {WelcomeComponent} from './home/welcome.component';
import {NewReleaseComponent} from './home/newRelease.component';
import {MyGamesComponent} from './home/myGames.component';
import {SearchResultsComponent} from './gameLibrary/searchResults.component';
import {GameDetailComponent} from './gameLibrary/gameDetail.component';

import {RegisterComponent} from './auth/register.component';
import {LoginComponent} from './auth/login.component';
import {ForgotPasswordComponent} from './auth/forgotPassword.component';
import {SetupPaymentComponent} from './auth/setupPayment.component';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
     { path: '/welcome', component: WelcomeComponent},
    { path: '/newRelease', component: NewReleaseComponent },
    { path: '/myGames', component: MyGamesComponent },
    { path: '/register', component: RegisterComponent },
    { path: '/forgotPassword', component: ForgotPasswordComponent },
    { path: '/payment', component: SetupPaymentComponent },
    { path: '/search/:q', component: SearchResultsComponent },
    { path: '/gameDetail/:isin', component: GameDetailComponent }
];