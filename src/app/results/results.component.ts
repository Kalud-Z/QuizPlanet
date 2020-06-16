import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import { questionObj } from '../questions/questionObj.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

// ###########################################################################################################################################################
export class ResultsComponent implements OnInit {  //#############################################################################################################
  questionsObjArray : questionObj[];
  overallScore : number
  finalScore : number
  finalScoreInPercentage : number

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

  onShowAnswers() { this.showAnswers = true }
  goBackToScore() { this.showAnswers = false }

// ##########################################################################################################################################################
} //##########################################################################################################################################################


