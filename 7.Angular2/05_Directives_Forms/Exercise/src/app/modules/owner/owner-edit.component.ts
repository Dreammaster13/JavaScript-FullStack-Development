import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';
import {Owner} from '../../interfaces/owner';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit-form.html',
  styles: [``]
})

export class OwnerEditComponent implements OnInit{
  owner: Owner;
  id: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.owner = new Owner();
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.dataService
      .getOwnerById(this.id)
      .then((data) => {
        this.owner = data;
      })
      .catch(err => console.log(err));
  }

  updateOwner() {
    this.dataService
      .updateSingleOwner(this.owner)
      .then((data) => {
        console.log(data);
        console.log('Owner edited successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
