import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[ColorHeader]'
})
export class WaterStatusDirective implements OnInit {

  @Input('ColorHeader') appWaterStatus
  a: number = 10
  constructor(private elem: ElementRef, private renderer: Renderer) {
     renderer.setElementStyle(elem.nativeElement, 'cursor', 'pointer');
       renderer.listen(elem.nativeElement, 'click', function(){
       alert(`${this.appWaterStatus}`);
       });

   }


  ngOnInit(){
console.log(this.appWaterStatus)
this.a = this.appWaterStatus
if(this.a < 40000){
    this.renderer.setElementStyle(this.elem.nativeElement, 'backgroundColor', '#8bc34a');
this.renderer.setElementStyle(this.elem.nativeElement, 'color', '#fff');
    }else if( this.a >= 50000 ){
    this.renderer.setElementStyle(this.elem.nativeElement, 'backgroundColor', '#FFC107');
    this.renderer.setElementStyle(this.elem.nativeElement, 'color', '#fff');
    }else if(this.a > 70000){
    this.renderer.setElementStyle(this.elem.nativeElement, 'backgroundColor', 'red');
    this.renderer.setElementStyle(this.elem.nativeElement, 'color', '#fff');
    }
  
}

}
