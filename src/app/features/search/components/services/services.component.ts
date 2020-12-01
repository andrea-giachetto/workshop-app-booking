import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <div class="nested">
      <div *ngFor="let icon of services">
        <i [class]="'icon ion-ios-' + icon" [title]="icon"></i>
      </div>
    </div>
  `
})
export class ServicesComponent {
  @Input() services: string[];
}
