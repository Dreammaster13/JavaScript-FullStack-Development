import {Component} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Owner} from '../../interfaces/owner';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-form.html',
  styles: [``]
})

export class OwnerCreateComponent {
  owner: Owner;

  constructor(private dataService: DataService) {
    this.owner = new Owner();
  }

  onSubmit() {
    const newOwner = this.owner;
    this.dataService
      .postSingleOwner(newOwner)
      .then((data) => {
        console.log(data);
        console.log('owner created successfully!');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
