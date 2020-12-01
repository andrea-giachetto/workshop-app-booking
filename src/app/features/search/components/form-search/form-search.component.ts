import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-search',
  template: `
    <form #f="ngForm" (submit)="search.emit(f.value.text)">
      <input type="text" placeholder="City (Rome or Milan)" [ngModel]="text" name="text">
      <button type="submit">SEARCH</button>
    </form>
  `
})
export class FormSearchComponent {
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Input() text: string;
}
