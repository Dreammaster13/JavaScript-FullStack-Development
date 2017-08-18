import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AnimalModel} from './animal.model';

import {AnimalsService} from './animals.service';
import {ServerResponseService} from '../core/server-response.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-animal.component.html',
})
export class AddAnimalComponent {
  animal: AnimalModel = new AnimalModel();
  animalTypes: Array<string> = ['Cat', 'Dog', 'Bunny', 'Exotic', 'Other'];

  constructor(private router: Router,
              private animalsService: AnimalsService,
              private serverResponseService: ServerResponseService) {
  }

  addAnimal() {
    this.animalsService
      .addAnimal(this.animal)
      .subscribe(res => {
        if (res.success) {
          console.log(res);

          this.serverResponseService.emitResponse(res);

          const animalId = res.animal.id;
          this.router.navigateByUrl(`animals/details/${animalId}`);
        } else {
          console.log(res);
          this.serverResponseService.emitResponse(res);
        }
      });
  }
}
