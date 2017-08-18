import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBoxShadow]'
})

export class BoxShadowDirective implements OnInit {
  @Input() appBoxShadow: string;

  constructor(private element: ElementRef) {
    this.appBoxShadow = `
    0px 0px 45px 0px rgba(107, 107, 107, 1)
    `;
  }

  ngOnInit() {
    this.element.nativeElement.style.boxShadow = this.appBoxShadow;
  }
}
