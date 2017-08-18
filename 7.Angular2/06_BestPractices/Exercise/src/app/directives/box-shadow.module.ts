import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BoxShadowDirective} from './box-shadow.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [BoxShadowDirective],
  exports: [BoxShadowDirective]
})

export class BoxShadowModule {}
