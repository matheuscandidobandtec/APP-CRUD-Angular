import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[For]'
})
export class ForDirective implements OnInit {

  @Input('ForEm') numbers: number[];

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
    ) 
    {
    console.log("For executado")
   }

   ngOnInit(): void {

      for(let number of this.numbers){
        this.container.createEmbeddedView(
          this.template, {$implicit:number
          })
      }
   }
}
