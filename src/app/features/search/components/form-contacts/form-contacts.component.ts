import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-contacts',
  template: `
    <form #contactForm="ngForm" (submit)="send.emit(contactForm.value)">
      <input type="text" placeholder="Your email*" required
             [ngModel] name="email">
      <textarea cols="20" rows="6" placeholder="Your message*" required
                [ngModel] name="msg"></textarea>
      <button type="submit" [disabled]="contactForm.invalid">SEND</button>
    </form>
  `
})
export class FormContactsComponent {
  @Output() send: EventEmitter<any> = new EventEmitter();
}
