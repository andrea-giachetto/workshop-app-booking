import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rate',
  template: `
    <div class="font-superbig">
      {{rate}}
      <i class="ion-ios-person"></i>
    </div>
  `
})
export class RateComponent {
  @Input() rate: number;
}
