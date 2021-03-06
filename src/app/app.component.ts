import { Component, OnInit, HostBinding } from '@angular/core';

import { environment } from 'src/environments/environment';

import { titleTrigger, zipperTrigger } from './animations';
import { SynchUIService } from './synch-ui.service';

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

  // introLoading = true;
  isLoading = false;
  openDoorNow = false;
  animateZipperNow = false;
  introAnimationDone = false;
  adjustMainContainer = false;

  introAnimationOn = environment.introAnimation;
  
  constructor(private synchUIService: SynchUIService) {}

  ngOnInit() {
    this.synchUIService.isLoading$.subscribe(data => { this.isLoading = data })
  
    setTimeout(() => { this.openDoorNow = true }, 4500);
    setTimeout(() => { this.animateZipperNow = true }, 1500);
    setTimeout(() => {
      this.introAnimationDone = true;
      this.adjustMainContainer = true;
    }, 6500);

    if(!this.introAnimationOn) { this.animateTitle() }
  } //ngonint()

  // TODO : write this as an animation
  animateTitle() {
    const allLetters = document.querySelectorAll('.appTitle__letter');
    setTimeout(() => { allLetters.forEach(el => el.classList.add('appTitle__letter-display')) }, 2000);
  }

} //########################################################################################################################################################
// #########################################################################################################################################################



