import { Directive, ElementRef, Renderer2, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appIntroAnimation]'
})

// ########################################################################################################################################################## 
export class IntroAnimationDirective implements OnChanges , OnInit { //####################################################################################################################

  constructor(private el : ElementRef , private renderer : Renderer2) { }

  @Input() _animateZipperNow : boolean



  ngOnInit() {
    this._animateZipperNow = false;
  }

  
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    if(changes._animateZipperNow.currentValue === true) {
      console.log('now we animate');
      // this.animateZipper();
    }
    
  }


  animateZipper() {
    // const zipperRightAll  = document.querySelectorAll('.right');
    // const zipperLeftAll   = document.querySelectorAll('.left');
    // const zipper          = document.querySelector('.zipper')

    const zipperContainer = this.el.nativeElement;
    const zipperContainerChildren = zipperContainer.childNodes;

    const zipper = zipperContainerChildren[0];

    const speed = 90;

    
    setTimeout(() => {
      // zipper.classList.add('zipper-goDown');
      this.renderer.addClass(zipper , 'zipper-goDown')
    }, 80);


    for(let i = 1 ; i < zipperContainerChildren.length ; i++) {
        (function(zipperContainerChildren) {
                setTimeout(function(){ 
                  // zipperContainerChildren[i].classList.add('hide');
                  // console.log(zipperContainerChildren[i]);
                  // const zipperContainer = el.nativeElement;
                  console.log('this iselemetttt ' );

                  // console.log(zipperContainerChildren[4])
                  // const zipperContainerChildren = zipperContainer.childNodes;
                  // this.renderer.addClass(zipperContainerChildren[4] , 'hide');
            } , speed * i); 
        })(zipperContainerChildren);
      }

    //   for(let i = 0 ; i < zipperLeftAll.length ; i++) {
    //   (function() {
    //           setTimeout(function(){ 
    //           zipperLeftAll[i].classList.add('hide');
    //       } ,speed * i); 
    //   })();
    // }

  } //animateZipper




  // ######################################################################################################################################################
}  // class ################################################################################################################################################
