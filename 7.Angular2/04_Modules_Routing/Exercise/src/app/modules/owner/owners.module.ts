import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppRoutesModule} from '../../routes.module';

import {OwnersAllComponent} from './owners.all.component';
import {OwnerIdComponent} from './owner.id.component';

@NgModule({
  imports: [CommonModule, AppRoutesModule],
  declarations: [OwnersAllComponent, OwnerIdComponent],
  exports: [OwnersAllComponent, OwnerIdComponent],
  providers: []
})

export class OwnersModule {}
