import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  template: `
    <img *ngIf="active" [src]="active" width="100%" height="150">
    <div class="nested">
      <div *ngFor="let img of images"
           (click)="active = img">
        <img [src]="img" width="100%" class="cursor">
      </div>
    </div>
  `
})
export class ImageGalleryComponent {
  @Input() active: string;
  @Input() images: string[];
}
