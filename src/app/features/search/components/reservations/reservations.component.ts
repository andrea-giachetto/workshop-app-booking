import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../../../../model/hotel';

@Component({
  selector: 'app-reservations',
  template: `
    <div class="horiz-grid separator"
         *ngFor="let room of rooms"
         (click)="addToCard.emit(room)"
    >
      <div>{{room.label}}</div>
      <div>
        {{room.price}}
        <i class="ion-ios-cart cursor"></i>
      </div>
    </div>
  `
})
export class ReservationsComponent {
  @Input() rooms: Room[];
  @Output() addToCard: EventEmitter<Room> = new EventEmitter();
}
