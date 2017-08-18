import {Component} from '@angular/core';
import {OwnerActions} from './owner.actions';
import {Owner} from '../../interfaces/owner.interface';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-form.html',
  styles: [``]
})

export class OwnerCreateComponent {
  owner: Owner;

  constructor(private ownerActions: OwnerActions) {
    this.owner = {
      id: null,
      name: '',
      image: '',
      carsOwned: 0
    };
  }

  onSubmit() {
    const newOwner = this.owner;

    this.ownerActions
      .postSingleOwner(newOwner);
  }
}
