import {OnInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightBorder]'
})
export class HighlightBorderDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  private color: string;


  @Input('appHighlightBorder') createdDate: Date;


  ngOnInit() {
    this.changeBorderColor();
  }

  private changeBorderColor() {
    this.compareDates();
    this.renderer.setStyle(this.el.nativeElement, 'border-color', this.color);
  }

  private compareDates() {
    const currentDate = new Date();
    const createdDateBlock = new Date(this.createdDate);
    const twoWeeksAgo = new Date(new Date(currentDate).setDate(currentDate.getDate() - 14));
    console.log(currentDate > createdDateBlock);
    if (createdDateBlock < currentDate && createdDateBlock >= twoWeeksAgo) {
      this.color = 'green';
    } else if (createdDateBlock > currentDate) {
      this.color = 'blue';
    }
  }
}
