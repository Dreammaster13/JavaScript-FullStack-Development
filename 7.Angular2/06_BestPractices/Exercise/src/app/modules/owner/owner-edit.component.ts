import {Component, OnInit} from '@angular/core';
import {select} from 'ng2-redux';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {OwnerActions} from './owner.actions';
import {Owner} from '../../interfaces/owner.interface';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit-form.html',
  styles: [``]
})

export class OwnerEditComponent implements OnInit {
  @select('owners') owners: Observable<Owner>;
  id: any;

  constructor(private ownerActions: OwnerActions, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.ownerActions
      .getOwnerById(this.id);
  }

  updateOwner() {
    // this.dataService
    //   .updateSingleOwner(this.owner)
    //   .then((data) => {
    //     console.log(data);
    //     console.log('Owner edited successfully');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
}
