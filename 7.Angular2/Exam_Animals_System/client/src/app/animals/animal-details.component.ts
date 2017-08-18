import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {AnimalModel} from './animal.model';

import {AnimalsService} from './animals.service';
import {ServerResponseService} from '../core/server-response.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styles: [`
    .details-card {
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

    .react-display {
      background-color: aquamarine;
      padding: 5px;
      display: inline-block;
    }

    .comment-message {
      background-color: antiquewhite;
      padding: 5px;
      display: inline-block;
    }

    .comment-user {
      background-color: lightcoral;
      padding: 5px;
      display: inline-block;
    }
  `]
})
export class AnimalDetailsComponent implements OnInit {
  private animalId: number;
  animal: AnimalModel = new AnimalModel();
  comments: Array<object>;
  newComment: string = null;
  reactionsType: Array<string> = ['like', 'love', 'haha', 'wow', 'sad', 'angry'];
  newReaction: string = null;
  isReacted = false;

  constructor(private route: ActivatedRoute,
              private animalsService: AnimalsService,
              private serverResponseService: ServerResponseService) {
  }

  ngOnInit() {
    this.animalId = this.route.params['value']['id'];

    this.animalsService
      .getAnimal(this.animalId)
      .subscribe(res => {
        this.animal = res;
        console.log(res);
      });

    this.animalsService
      .getComments(this.animalId)
      .subscribe(res => {
        this.comments = res;
        console.log(res);
      });
  }

  react() {
    const data: object = {type: this.newReaction};
    const id = this.animal['id'];

    this.animalsService
      .react(data, id)
      .subscribe(res => {
        console.log(res);
        if (res.success) {
          this.animal.reactions[this.newReaction]++;
          this.isReacted = true;
          this.serverResponseService.emitResponse(res);
        } else {
          this.serverResponseService.emitResponse(res);
        }
      });
  }

  commentThis() {
    const data = {message: this.newComment};
    const id = this.animal['id'];

    this.animalsService
      .submitComment(data, id)
      .subscribe(res => {
        console.log(res);

        if (res.success) {
          this.comments.push(res.comment);
          this.newComment = null;
          this.serverResponseService.emitResponse(res);
        } else {
          this.serverResponseService.emitResponse(res);
          this.newComment = null;
        }
      });
  }
}
