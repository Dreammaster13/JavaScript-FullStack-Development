import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';

import {Owner} from '../../interfaces/owner';

@Component({
  selector: 'app-owner-id',
  template: `
    <div class='owners-all-card' *ngIf='owner'>
      <img class='img' [src]='owner.image'/>
      <div>Name: {{owner.name}}</div>
      <hr />
      <div>Cars owned: {{owner.carsOwned}}</div>
    </div>
  `,
  styles: [`
    .owners-all-card {
      width: 70%;
      padding: 15px;
      margin: 25px;
      border: solid 2px gray;
      overflow: hidden;
      font-size: 18px;
    }
    .img {
      width: 60%;
      float: left;
      margin: 30px;
      border-radius: 25px;
      -webkit-box-shadow: 0px 0px 45px 0px rgba(107,107,107,1);
      -moz-box-shadow: 0px 0px 45px 0px rgba(107,107,107,1);
      box-shadow: 0px 0px 45px 0px rgba(107,107,107,1);
    }
  `]
})

// TODO implement interface for owner to stop the error
export class OwnerIdComponent implements OnInit {
  owner: Owner;
  id: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
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
}
