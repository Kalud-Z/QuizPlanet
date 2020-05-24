
export class questionObj {

    constructor(
       public question : string,
       public options : string[],
       public correctAnswer : string,
       public chosenAnswer? : string,
    ) {}
}