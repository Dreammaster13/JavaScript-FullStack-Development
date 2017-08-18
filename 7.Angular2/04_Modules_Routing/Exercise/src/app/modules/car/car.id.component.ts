import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

import {Car} from '../../interfaces/car';

@Component({
  selector: 'app-car-id',
  template: `
    <div class='car-id-card' *ngIf='car'>
      <img class='img' [src]='car.image'/>
      <div>Make: {{car.make}}</div>
      <hr />
      <div>Model: {{car.model}}</div>
      <hr />
      <div>Year: {{car.year}}</div>
      <hr />
      <div>Engine: {{car.engine}}</div>
      <hr />
      <div>Owner: {{car.owner}}</div>
      <hr />
      <div>Created on: {{car.createdOn | date:"dd/MM/yyyy"}}</div>
      <hr />
      <p>Comments:</p>
      <div class='comments-block'>
        <p *ngFor='let comment of car.comments'>
          {{comment}}
        </p>
      </div>
      <div *ngIf='car.comments.length < 1'> 0</div>
    </div>
  `,
  styles: [`
    .car-id-card {
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
    .comments-block {
      background-color: antiquewhite;
      display: inline-block;
      padding: 0 20px;
    }
  `]
})

// TODO implemented interface for car
export class CarIdComponent implements OnInit {
  car: Car;
  id: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
    ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.dataService
      .getCarById(this.id)
      .then((data) => {
        this.car = data;
      })
      .catch(err => console.log(err));
  }
}
