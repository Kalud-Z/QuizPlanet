import { Directive, ElementRef, Renderer2, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBlockButton]'
})

// ######################################################################################################################################################
export class BlockButtonDirective implements OnInit , OnChanges { //##################################################################################################################

  @Input() blockNextButton : boolean;
  @Input() blockPrevButton : boolean;

  buttonsContainer : HTMLElement;
  buttonsContainerChildren : any;

  prevButton : any;
  nextButton : any;

  buttonBlocker : any;

  constructor(private el : ElementRef , private renderer : Renderer2) {
  }

  
  ngOnInit() {
  } //ngoninit
  

  ngOnChanges(changes: SimpleChanges){
    this.buttonsContainer = this.el.nativeElement;
    this.buttonsContainerChildren = this.buttonsContainer.children;

    console.log(' buttonsContainer : ' , this.buttonsContainer)
    console.log('buttonsContainerChildren : ' , this.buttonsContainerChildren)

    const array = Array.prototype.slice.call(this.buttonsContainerChildren);

    console.log('el 0 :  ####  , ' , array)
    console.log('el 0 :  ####  , ' , array[0])
    console.log('el 0 :  ####  , ' ,typeof array)

    this.prevButton = this.buttonsContainerChildren[0];
    this.nextButton = this.buttonsContainerChildren[1];
    
      if(this.blockNextButton) {
        this.addBlocker(this.nextButton);
      } else {
      }

      if(this.blockPrevButton) {
        console.log('we are about to block the prev biutton and thisi the button : ' , this.prevButton)

        this.addBlocker(this.prevButton);
      } else {
        this.renderer.removeChild(this.prevButton, this.buttonBlocker);
      }
  }


  addBlocker(target : any) {
    if(target.childNodes.length <= 1) {
      this.buttonBlocker  = this.renderer.createElement('div');
      this.renderer.addClass(this.buttonBlocker, 'buttonBlockerDiv');
      this.renderer.appendChild(target, this.buttonBlocker);
    }
  }


}  //######################################################################################################################################################
// ########################################################################################################################################################
