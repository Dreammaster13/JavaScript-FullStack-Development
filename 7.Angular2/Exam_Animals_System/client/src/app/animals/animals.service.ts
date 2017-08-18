import {Injectable} from '@angular/core';
import {HttpService} from '../core/http.service';

@Injectable()
export class AnimalsService {
  constructor(private httpService: HttpService) {
  }

  addAnimal(animal) {
    return this.httpService
      .post('animals/create', animal, true);
  }

  getAnimal(animalId) {
    return this.httpService
      .get(`animals/details/${animalId}`, true);
  }

  allAnimals(page = 1, search = null) {
    let url = `animals/all?page=${page}`;
    if (search) {
      url += `&search=${search}`;
    }
    return this.httpService
      .get(url);
  }

  react(data, id) {
    return this.httpService
      .post(`animals/details/${id}/reaction`, data, true);
  }

  submitComment(data, id) {
    return this.httpService
      .post(`animals/details/${id}/comments/create`, data, true);
  }

  getComments(id) {
    return this.httpService
      .get(`animals/details/${id}/comments`, true);
  }
}
