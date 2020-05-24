import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { questionObj } from './questionObj.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { createNewTrigger, nextQuestionTrigger } from '../animations';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  animations : [
    nextQuestionTrigger
  ]
})

// /#######################################################################################################################################################
export class QuestionsComponent implements OnInit {  //####################################################################################################
  questionsAndOptions : questionObj[] ;
  chosenAnswer : string;
  questionsCounter : number = 0;
  numberOfQuestions : number;

  isLoading = false;

  constructor(private dataService : DataService, private router : Router) { }

  ngOnInit(): void {
    // this.questionsAndOptions = this.dataService.fetchQuestions();
    this.numberOfQuestions = this.dataService.numOfQuestions;
    this.questionsAndOptions = this.dataService.getQuestionsAndOptions();
  }


  answerChosen(answer : string) {
    this.chosenAnswer = answer;
  }

  goToNextQuestion() {
    // we save the answer
    if(this.questionsCounter < this.numberOfQuestions - 1) {
      this.dataService.saveAnswer(this.questionsCounter, this.chosenAnswer);
      this.questionsCounter++;
    }
    setTimeout(() => { this.tickOption() }, 20);
  }

  goToPrevQuestion() {
    if(this.questionsCounter >= 1) {
      this.questionsCounter--;
    }
    setTimeout(() => { this.tickOption() }, 20);
  }


  

  tickOption() {
    const currentQuestionObj = this.questionsAndOptions[this.questionsCounter];
    const chosenAnswer = currentQuestionObj.chosenAnswer;
    if(chosenAnswer && chosenAnswer.length > 0) {
      let chosenAnswerIndex = currentQuestionObj.options.indexOf(chosenAnswer);
    
      let element: HTMLElement = document.querySelector('#option'+ chosenAnswerIndex);  
      element.click();
    }
  }

  
  goToScorePage() {
    this.dataService.saveAnswer(this.questionsCounter, this.chosenAnswer);
    this.toggleIsLoading(true)
    this.dataService.calculateScore();
    setTimeout(() => {
      this.router.navigate(['/results']);
      this.toggleIsLoading(false)
    }, 2000);
  }


  toggleIsLoading(value : boolean) {
    this.isLoading = value;
    this.dataService.isLoadingSubject.next(this.isLoading);
  }


}  //#######################################################################################################################################################
// #########################################################################################################################################################
