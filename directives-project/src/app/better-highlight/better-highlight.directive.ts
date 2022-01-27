import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input('') highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
      // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
      this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor= this.highlightColor;
  }

  @HostListener('mouseleave') mouseleaver(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white')
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black')
    this.backgroundColor= this.defaultColor;
  }

}
