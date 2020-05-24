import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { questionObj } from '../questions/questionObj.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

// ###########################################################################################################################################################
export class ResultsComponent implements OnInit {  //#############################################################################################################
  overallScore : number
  finalScore : number
  finalScoreInPercentage : number

  questionsObjArray : questionObj[];

  showAnswers = false;

  constructor(private dataService : DataService, private router : Router) { }

  ngOnInit(): void {
    this.finalScore = this.dataService.finalScore;
    this.overallScore = this.dataService.overallScore;
    this.questionsObjArray = this.dataService.getQuestionsAndOptions();
  }

  onPlayAgain() {
    this.dataService.resetData();
    this.router.navigate(['/intro']);
  }

  onShowAnswers() {
    this.showAnswers = true;
  }

  goBackToScore() {
    this.showAnswers = false
  }


// ##########################################################################################################################################################
} //##########################################################################################################################################################


