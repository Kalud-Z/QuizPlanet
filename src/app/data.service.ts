import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { questionObj } from './questions/questionObj.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

// ######################################################################################################################################################
export class DataService { //############################################################################################################################
  // categories : string[] = ['sports' , 'animals' , 'computer-science', 'movies', 'music', 'politics'];
  readyToDisplayQuestions = new Subject<boolean>();
  isLoadingSubject = new BehaviorSubject<boolean>(false);

  chosenCat       : number
  numOfQuestions  : number
  difficulty      : string

  finalScore : number;
  overallScore : number;

  //  questionsAndOptions : questionObj[] = [
  //   {
  //     question : 'Former United States President Bill Clinton famously played which instrument?',
  //     options : ['Piano' , 'Baritone horn' , 'saxophone' , 'violin'],
  //     correctAnswer : 'Piano'
  //   },
  //   {
  //     question : 'Former Unitedsfsdfsgsgsinton famously played which insgdsgstrument?',
  //     options : [ 'Piano'  , 'Baritone'  , 'saxsdfsophone'  , 'visdfsdgolin'],
  //     correctAnswer : 'Baritone'
  //   }
  // ]; 

  questionsAndOptions : questionObj[] = [];
  

  constructor(private http: HttpClient
              )  {}


  resetData() {
    this.questionsAndOptions = []
  }

  initData(cat : number , numOfQuestions : number , diff : string) {
    this.chosenCat = cat;
    this.numOfQuestions = numOfQuestions;
    this.difficulty = diff;
    // console.log('this is the diff : ' , this.difficulty)
  }

  getQuestionsAndOptions(): questionObj[] {
    return this.questionsAndOptions.slice();
    // console.log(this.questionsAndOptions)
  
  }

  saveAnswer(id : number , answer : string) {
    this.questionsAndOptions[id].chosenAnswer = answer;
    // console.log('this is the questions objects : ');
    // console.log(this.questionsAndOptions)
  }


  fetchQuestions(cat : number , numOfQuestions : number , diff : string){
    // console.log('we fetching now')
      this.initData(cat , numOfQuestions , diff);
      // return this.http.get<questionObj[]>(`https://opentdb.com/api.php?amount=${this.numOfQuestions}&category=${this.chosenCat}&difficulty=${this.difficulty}`)
      //   .pipe(map(data => {
      //   this.buildQuestionsArray(data);
      //   return this.questionsAndOptions;
      //   }))
      this.http.get<questionObj[]>(`https://opentdb.com/api.php?amount=${this.numOfQuestions}&category=${this.chosenCat}&difficulty=${this.difficulty}`)
      .subscribe(data => {
        this.buildQuestionsArray(data);
        // console.log('we are done fethcin now')
      })

  }


  buildQuestionsArray(data : any) {
    data.results.forEach(el => {
      let question : string;
      let options: string[];
      let correctAnswer : string;
      correctAnswer = el.correct_answer;

      let incorrectAnswersFixed = el.incorrect_answers.map(el => {
        return this.transformHTMLChars(el)
      })

      options = [ this.transformHTMLChars(el.correct_answer) , ...incorrectAnswersFixed];

      question = this.transformHTMLChars(el.question);

      const questionObjTemp = new questionObj(question , options , correctAnswer);

      this.questionsAndOptions.push(questionObjTemp);

    })

    this.readyToDisplayQuestions.next(true);
    this.overallScore = this.questionsAndOptions.length * environment.pointsPerCorrectAnswer;
  }

  calculateScore() {
    let tempFinalScore = 0;
    this.questionsAndOptions.forEach(el => {
      if(el.chosenAnswer == el.correctAnswer) {
        tempFinalScore += environment.pointsPerCorrectAnswer;
      }
    })
    this.finalScore = tempFinalScore;
  }

  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   EXTERNAL METHODS  §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

    
  transformHTMLChars(str:string): string {
    // (/blue/gi, "red");
    // str = str.replace('&amp;' , '&');
    // str = str.replace('&lt;' , '<');
    // str = str.replace('&gt;' , '>');
    // str = str.replace('&quot;' , '"');

    str = str.replace(/&#039;/gi , "'");
    str = str.replace(/&amp;/gi , "&");
    str = str.replace(/&lt;/gi , "<");
    str = str.replace(/&gt;/gi , ">");
    str = str.replace(/&quot;/gi , '"');

    return str;
  }


}   //#####################################################################################################################################################
// ###########################################################################################################################################################

