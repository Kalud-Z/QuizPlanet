import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTrackBar]'
})

// ##########################################################################################################################################################
export class TrackBarDirective { //##########################################################################################################################

  constructor(private el : ElementRef , private renderer : Renderer2) {}
  
  @Input() currentQuestionIndex: number;
  timer : number;
  trackBarContainer = this.el.nativeElement;
  trackBarChildren  = this.trackBarContainer.childNodes;

  ngDoCheck() {
    this.timer = this.currentQuestionIndex === 0 ? 500 : 0 ;
    setTimeout(() => {
      this.renderer.addClass(this.trackBarChildren[this.currentQuestionIndex], 'fillBar');
    }, this.timer);
  }


  // ######################################################################################################################################################
} //########################################################################################################################################################
