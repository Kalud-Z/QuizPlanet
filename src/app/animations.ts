import { trigger, style, transition, animate, query, group, stagger, keyframes, state } from '@angular/animations';


export const zipperTrigger = trigger('zipperState' , [
    // state('hidden', style({
    //     opacity : 0
    //   })),
    // transition('*=>hidden', animate('1000ms'))

    transition('* => hidden' , [
    //    query('.right', style({ opacity: 0 })),
       style({ opacity : 1 }),
       animate('1.5s ease-in-out', style({ opacity : 0 }))
    //    query('.right', animate(1000, style({ opacity: 0 }))),
      ]), //transition


])




export const nextQuestionTrigger = trigger('nextQuestionState', [
    transition('* => *' , [
                style({
                    opacity : 0
                    // 'background-color' : 'red'
                }),
                animate('.35s' , style({
                    opacity : 1
                    // 'background-color' : 'red'
                }))
    ]), //transition
])



// catsContainer     catWrapper
export const introImagesTrigger = trigger('introImagesState', [
    transition(':enter' , [
        group([
            query('.selectNumberAndDifficultyWrapper' , [
                style({
                    opacity : 0
                }),
                animate('2.55s' , style({
                    opacity : 1
                }))
            ] , { optional: true }), //query

            query('.catsContainer , .start-button' , [
                style({
                    transform : 'scale(0.25)',
                    opacity : 0
                    // border: '8px solid yellow'
                    // 'background-color' : 'red'
                }),
                animate('2.55s ease-in' , style({
                    transform : 'scale(1)',
                    opacity : 1
                    // border: '8px solid yellow'
                }))
            ] , { optional: true }), //query
        ])
        
      ]), //transition
])









export const titleTrigger = trigger('titleState', [
    transition(':enter' , [
       query('.AppTitle__letter' , [
        animate('.1s  .5s' , style({
            'margin-right': '0rem !important'
        }))
       ])
      ]), //transition
])




export const introPageTrigger = trigger('introPageState', [
    transition(':enter' , [
        style({
            opacity : 0
            // 'background-color' : 'red'
        }),
        animate('1.55s' , style({
            opacity : 1
            // 'background-color' : 'red'
        })),
      ]), //transition
])




export const createNewTrigger = trigger('createNewState', [
      transition(':enter' , [
        query('.form' , [
            style({
                transform : 'scale(0.85)'
                // opacity : 0
            }),
            animate(300 , style({
                transform : 'scale(1.05)'
            })),
            animate(100)
        ]), //query
  ]), //transition
  
    //   #############################################################################

    transition(':leave', animate('.25s', style({
        opacity : 0
    })))//transition

]);//createNewTrigger




export const popupWindowTrigger = trigger('popupWindowState', [
    transition(':enter' , [
            query('.popup__body' , [
                style({
                    transform : 'translateX(-10px)'
                }),
                animate(100 , style({
                    transform : 'translateX(8px)'
                })),
                animate(100 , style({
                    transform : 'translateX(-6px)'
                })),
                animate(100)
            ]), //query
      ]), //transition
  
    //   #############################################################################



]);//createNewTrigger




// export const listStateTrigger = trigger('listState', [
//     transition('* => *', [
//       query(':enter', [
//         style({
//           opacity : 0,
//           transform : 'translateX(-100%)',
//         }),
//         stagger(1000 , [ 
//           animate('1s', keyframes([
//             style({
//               opacity : 1,
//               transform : 'translateX(10%)',
//               offset : 0.5
//             }),
//             style({
//               opacity : 1,
//               transform : 'translateX(0)',
//               offset : 1
//             })
//           ]))
//         ])
       
//       ], {optional : true})//query
//     ])//transition
//   ]);
  



