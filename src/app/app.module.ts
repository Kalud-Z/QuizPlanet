import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { QuestionsComponent } from './questions/questions.component';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ResultsComponent } from './results/results.component';
import { BlurredSurfaceComponent } from './shared/blurred-surface/blurred-surface.component';
import { DisplayScoreDirective } from './results/directives/display-score.directive';
import { TrackBarDirective } from './questions/directives/track-bar.directive';
import { BlockButtonDirective } from './questions/directives/block-button.directive'; // CLI imports AppRoutingModule


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    QuestionsComponent,
    ResultsComponent,
    BlurredSurfaceComponent,
    DisplayScoreDirective,
    TrackBarDirective,
    BlockButtonDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }















