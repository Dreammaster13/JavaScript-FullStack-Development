import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

import {Owner} from '../../interfaces/owner';

@Component({
  selector: 'app-owners-all',
  template: `
    <div class='sort-control'>
      <button (click)=orderByNameAsc()>Sort by name Ascending</button>
      <button (click)=orderByNameDesc()>Sort by name Descending</button>
    </div>
    <div class='owners-all-card' *ngFor='let owner of owners'>
      <img class='img' [src]='owner.image' [appBoxShadow] />
      <div>Name: {{owner.name}}</div>
      <hr />
      <a routerLink='/owners/{{owner.id}}'>Owner Details</a>
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
    }
    .sort-control {
      margin: 25px;
      display: flex;
      justify-content: space-around;
      width: 70%;
    }
  `]
})

export class OwnersAllComponent implements OnInit {
  owners: Array<Owner>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService
      .getOwnersAll()
      .then((data) => {
        this.owners = data;
      })
      .catch(err => console.log(err));
  }

  orderByNameAsc() {
    this.owners.sort((a, b) => a.name.localeCompare(b.name));
  }

  orderByNameDesc() {
    this.owners.sort((a, b) => b.name.localeCompare(a.name));
  }
}
