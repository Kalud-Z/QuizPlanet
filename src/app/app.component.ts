import { Component, OnInit, HostBinding } from '@angular/core';
import { DataService } from './data.service';
import { titleTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : [
    titleTrigger
  ]
})
export class AppComponent implements OnInit { //##############################################################################################################################
  @HostBinding('@titleState') routeAnimationn = true;
  isLoading = false;

  constructor(private dataStorage : DataService) {}

  ngOnInit() {
    this.dataStorage.isLoadingSubject.subscribe(data => {
      this.isLoading = data;
    })


    const allLetters = document.querySelectorAll('.AppTitle__letter');
    setTimeout(() => {
      allLetters.forEach(el => el.classList.add('display-Letter'))   
    }, 2000);

  }
  


} //########################################################################################################################################################
