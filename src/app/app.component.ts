import { Component, OnInit, HostBinding } from '@angular/core';
import { DataService } from './data.service';
import { titleTrigger, zipperTrigger } from './animations';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : [
    titleTrigger,
    zipperTrigger
  ]
})


// ###########################################################################################################################################################
export class AppComponent implements OnInit { //##############################################################################################################################
  @HostBinding('@titleState') routeAnimationn = true;
  isLoading = false;
  introLoading = true;

  openDoorNow = false;

  introAnimationDone = false;
  adjustMainWrapper = false;

  introAnimationOn = environment.introAnimation;

  animateZipperNow = false;

  

  constructor(private dataStorage : DataService) {}

  ngOnInit() {
    this.dataStorage.isLoadingSubject.subscribe(data => {
      this.isLoading = data;
    })

  
    setTimeout(() => {
      this.openDoorNow = true;
    }, 4500);

    setTimeout(() => {
      this.animateZipperNow = true;
    }, 1500);

    setTimeout(() => {
      this.introAnimationDone = true;
      this.adjustMainWrapper = true;
    }, 6500);


    if(!this.introAnimationOn) {
      this.animateTitle();
    }


  } //ngonint()


  animateTitle() {
    const allLetters = document.querySelectorAll('.AppTitle__letter');
    setTimeout(() => {
      allLetters.forEach(el => el.classList.add('display-Letter'))   
    }, 2000);
  }

    


  // /####################################################################################################################################################
} //########################################################################################################################################################




/* 
animateZipper() {
  const button = document.querySelector('.start')

  const zipperRightAll  = document.querySelectorAll('.right');
  const zipperLeftAll   = document.querySelectorAll('.left');
  const zipper          = document.querySelector('.zipper')

  const speed = 90;

  
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
 */