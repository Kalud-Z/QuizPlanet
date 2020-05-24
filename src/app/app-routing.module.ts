import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { IntroComponent } from './intro/intro.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultsComponent } from './results/results.component';


const AppRoutes: Routes = [ 
  { path: 'intro' , component : IntroComponent },
  { path: 'questions' , component : QuestionsComponent },
  { path: 'results' , component : ResultsComponent },
  { path: '**' , redirectTo : 'intro' , pathMatch : 'full'}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
