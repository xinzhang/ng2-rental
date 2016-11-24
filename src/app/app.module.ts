import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {WelcomeComponent} from './home/welcome.component';
import {NewReleaseComponent} from './home/newRelease.component';
import {MyGamesComponent} from './home/myGames.component';
import {SearchResultsComponent} from './gameLibrary/searchResults.component';
import {GameDetailComponent} from './gameLibrary/gameDetail.component';

import {RegisterComponent} from './auth/register.component';
import {LoginComponent} from './auth/login.component';
import {ForgotPasswordComponent} from './auth/forgotPassword.component';
import {SetupPaymentComponent} from './auth/setupPayment.component';

import {HighlightDirective} from './attributes/highlight.directive';

import {AuthService} from './services/auth.service';
import {GameService} from './services/game.service';
import {GameLibraryService} from './services/gameLibrary.service';
import {PaymentService} from './services/payment.service';

import { GamePlatformFilterPipe } from './services/game-platform.filter';
import { GameOrderFilterPipe } from './services/game-order.filter';

@NgModule({
  declarations: [
    AppComponent,   
    WelcomeComponent, NewReleaseComponent, MyGamesComponent, SearchResultsComponent, GameDetailComponent,
    RegisterComponent, LoginComponent, ForgotPasswordComponent, SetupPaymentComponent,
    HighlightDirective,
    GamePlatformFilterPipe, GameOrderFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    AuthService, GameService, GameLibraryService, PaymentService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
