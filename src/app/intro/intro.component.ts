import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { introPageTrigger, introImagesTrigger } from '../animations';

import { DataService } from '../data.service';
import { SynchUIService } from '../synch-ui.service';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations : [
    introPageTrigger,
    introImagesTrigger
  ]
})
//#########################################################################################################################################################
export class IntroComponent implements OnInit { //#############################################################################################################
  chosenCatName : string;
  chosenCatId : number;
  numberOfQuestions = 4 ;
  difficulty = 'medium';

  timerOn : boolean = false;
  isLoading = false;

  catMap = {
    catName : ['sports' , 'animals' , 'computer-science' , 'movies' , 'music' , 'politics'],
    catId   : [21 , 27 , 18 , 11, 12 , 24]
  }

  constructor(private dataService : DataService,
              private router : Router,
              private synchUIService : SynchUIService
              ) { }

  ngOnInit(): void {
    this.synchUIService.readyToDisplayQuestions$.subscribe(data => {
      if(data === true) {
        this.toggleIsLoading(false);
        this.router.navigate(['/questions']);
      }
    })
  }

  toggleIsLoading(value : boolean) {
    this.isLoading = value;
    this.synchUIService.isLoading$.next(this.isLoading);
  }

  toggleTimer() { this.timerOn = !this.timerOn }

  catChosen(type : string) {
    this.chosenCatName = type;
    let indexOfCatName =  this.catMap.catName.indexOf(type);
    this.chosenCatId = this.catMap.catId[indexOfCatName]; 
  }

  displayQuestions() {
    if(this.chosenCatId >= 0) {
      this.toggleIsLoading(true);
      setTimeout(() => {
        this.dataService.fetchQuestions(this.chosenCatId , this.numberOfQuestions , this.difficulty);
      }, 2000);
    }
  }




}  // class ###############################################################################################################################################


