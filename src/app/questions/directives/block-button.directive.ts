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
    // this.buttonsContainer = this.el.nativeElement;
    // this.buttonsContainerChildren = this.buttonsContainer.childNodes;

    // this.prevButton = this.buttonsContainerChildren[0];
    // this.nextButton = this.buttonsContainerChildren[1];
// 
    // console.log('ngonint called')
  } //ngoninit
  

  ngOnChanges(changes: SimpleChanges){
    this.buttonsContainer = this.el.nativeElement;
    // this.buttonsContainerChildren = this.buttonsContainer.childNodes;
    this.buttonsContainerChildren = this.buttonsContainer.children;

    console.log(' buttonsContainer : ' , this.buttonsContainer)
    console.log('buttonsContainerChildren : ' , this.buttonsContainerChildren)

    // const array = Array.from(this.buttonsContainerChildren);
    const array = Array.prototype.slice.call(this.buttonsContainerChildren);

    console.log('el 0 :  ####  , ' , array)
    console.log('el 0 :  ####  , ' , array[0])
    console.log('el 0 :  ####  , ' ,typeof array)

    this.prevButton = this.buttonsContainerChildren[0];
    this.nextButton = this.buttonsContainerChildren[1];
    console.log('prev button : ' , this.prevButton)
    console.log('cons iscalled')


    console.log('ngonchange called')

    // console.log('onhange iscalled and these are thecahnges ; ');
    // console.log(changes);

      if(this.blockNextButton) {
        // console.log('we are blockin the next button now')
        this.addBlocker(this.nextButton);
      } else {
        // this.buttonsContainer.removeChild(this.nextButton);
      }

      if(this.blockPrevButton) {
        console.log('we are about to block the prev biutton and thisi the button : ' , this.prevButton)

        this.addBlocker(this.prevButton);
      } else {
        // console.log('we are about to remove the block button')
        this.renderer.removeChild(this.prevButton, this.buttonBlocker);
      }
  }


  addBlocker(target : any) {
    // console.log('called add blocker')
    // console.log('target ' , target)
    // console.log('target kids ' , target.childNodes)
    if(target.childNodes.length <= 1) {
    // console.log('we are about to add the add blocker')
      this.buttonBlocker  = this.renderer.createElement('div');
      this.renderer.addClass(this.buttonBlocker, 'buttonBlockerDiv');
      this.renderer.appendChild(target, this.buttonBlocker);
    }
    // console.log(target.childNodes.length)
  }


}  //######################################################################################################################################################
// ########################################################################################################################################################
