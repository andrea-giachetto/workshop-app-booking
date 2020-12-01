import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { IntToArrayPipe } from './pipes/int-to-array.pipe';

const COMPONENTS = [
  IntToArrayPipe,
  CardComponent,
  SeparatorComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule]
})
export class SharedModule {}
