import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
      <div class="title" *ngIf="title">{{title}}</div>
      <div [ngClass]="{'content': padding, 'center': centeredContent}">
        <ng-content></ng-content>
      </div>
  `,
})
export class CardComponent {
  @Input() title: string;
  @Input() isScrollable: boolean;
  @Input() padding = true;
  @Input() customCls: string;
  @Input() centeredContent: boolean;

  @HostBinding('className') get className() {
    let cls = 'card';
    cls += this.isScrollable ? ' scrollable' : '';
    cls += this.customCls ? ` ${this.customCls}` : '';
    return cls;
  }
}
