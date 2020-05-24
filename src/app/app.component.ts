import { Component, OnInit, HostBinding } from '@angular/core';
import { DataService } from './data.service';
import { titleTrigger, zipperTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : [
    titleTrigger,
    zipperTrigger
  ]
})
export class AppComponent implements OnInit { //##############################################################################################################################
  @HostBinding('@titleState') routeAnimationn = true;
  isLoading = false;
  introLoading = true;

  openDoorNow = false;

  hideElement : string;


  constructor(private dataStorage : DataService) {}

  ngOnInit() {
    this.dataStorage.isLoadingSubject.subscribe(data => {
      this.isLoading = data;

      setTimeout(() => {
  // this.openDoorNow = true;
      }, 3000);
    })

    setTimeout(() => {
      this.animateZipper()
      // this.hideElement = 'hidden';
    }, 3000);


    // const allLetters = document.querySelectorAll('.AppTitle__letter');
    // setTimeout(() => {
    //   allLetters.forEach(el => el.classList.add('display-Letter'))   
    // }, 2000);

  }


  openDoorTrigger() {
    setTimeout(() => {
      return true;
    }, 2000);

    // return true;
  }

  animateZipper() {
    const button = document.querySelector('.start')

    const zipperRightAll  = document.querySelectorAll('.right');
    const zipperLeftAll   = document.querySelectorAll('.left');
    const introDoorLine   = document.querySelector('.introDoor__line');
    const zipper          = document.querySelector('.zipper')

    const speed = 90;

    introDoorLine.classList.add('introDoor__line-goDown');
    
    setTimeout(() => {
      zipper.classList.add('zipper-goDown');
    }, 80);

    for(let i = 0 ; i < zipperRightAll.length ; i++) {
        (function() {
                setTimeout(function(){ 
                zipperRightAll[i].classList.add('hide');
            } , speed * i); 
        })();
      }

      for(let i = 0 ; i < zipperLeftAll.length ; i++) {
      (function() {
              setTimeout(function(){ 
              zipperLeftAll[i].classList.add('hide');
          } ,speed * i); 
      })();
    }

  } //animateZipper

  








  


} //########################################################################################################################################################
