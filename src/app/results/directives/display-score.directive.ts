import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDisplayScore]'
})

// /#########################################################################################################################################################
export class DisplayScoreDirective implements OnInit {  //#####################################################################################################################

  constructor(private el : ElementRef , private renderer : Renderer2) { }

  @Input() finalScore: number;
  @Input() overallScore: number;

  ngOnInit() {
    this.displayFinalScore(this.finalScore , this.overallScore);

  }
  
  displayFinalScore(finalScore : number , maxScore : number) {
    const finalScoreInPercentage = Math.ceil((finalScore * 100) / maxScore); 
    const scoreOutputElement = this.el.nativeElement;

    if(finalScoreInPercentage === 0) {
      scoreOutputElement.innerText =  0 + '%';
    } 
    else {
        var counter = 1;
        const func = () => {
            scoreOutputElement.innerText = counter.toString() + '%';
            counter++;
        }
        this.setDeceleratingTimeout(func, 1 , finalScoreInPercentage);     
    }
  }


  setDeceleratingTimeout(callback, factor, times) {
      var internalCallback = function(tick, counter) {
          return function() {
              var limit;
              if (--tick >= 0) {
                  if(times >= 50 && times <= 100) { limit = (20 * times)/100 ; } else { limit = (25 * times)/100 }
                  if(tick < limit) { counter = counter + 10 } else { counter++ }
                  window.setTimeout(internalCallback, counter * factor );
                  callback();
              }
          }
      }(times, 0);

      window.setTimeout(internalCallback, factor);
  }



// ##########################################################################################################################################################
}  //########################################################################################################################################################
