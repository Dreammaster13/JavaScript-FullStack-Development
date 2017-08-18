import {Component, OnInit} from '@angular/core';

import {AnimalModel} from '../animals/animal.model';

import {UsersService} from './users.service';
import {ServerResponseService} from '../core/server-response.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [`
    .overview-card {
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
  `]
})
export class ProfileComponent implements OnInit {
  animals: Array<AnimalModel> = [];

  constructor(private usersService: UsersService,
              private serverResponseService: ServerResponseService) {
  }

  ngOnInit() {
    this.usersService
      .animalsMine()
      .subscribe(res => {
        console.log(res);
        this.animals = res;
      });
  }

  delete(id) {
    this.usersService
      .delete(id)
      .subscribe(res => {
        const animalIndex = this.animals.findIndex(animal => animal['id'] === id);
        this.animals.splice(animalIndex, 1);

        this.serverResponseService.emitResponse(res);
      });
  }
}
