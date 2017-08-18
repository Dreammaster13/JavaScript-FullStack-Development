import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AppRoutesModule} from '../../routes.module';
import {BoxShadowModule} from '../../directives/box-shadow.module';

import {OwnersAllComponent} from './owners-all.component';
import {OwnerIdComponent} from './owner-id.component';
import {OwnerCreateComponent} from './owner-create.component';
import {OwnerEditComponent} from './owner-edit.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutesModule,
    FormsModule,
    BoxShadowModule
  ],
  declarations: [OwnersAllComponent, OwnerIdComponent, OwnerCreateComponent, OwnerEditComponent],
  exports: [OwnersAllComponent, OwnerIdComponent, OwnerCreateComponent],
  providers: []
})

export class OwnersModule {}
