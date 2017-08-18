import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {AnimalModel} from './animal.model';

import {AnimalsService} from './animals.service';

@Component({
  selector: 'app-animals-all',
  templateUrl: 'animals-all.component.html',
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

    .search-field {
      margin-top: 10px;
    }
  `]
})
export class AnimalsAllComponent implements OnInit {
  page: number;
  searchText: string = null;
  animals: Array<AnimalModel> = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private animalsService: AnimalsService) {
    this.page = 1;
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.page = +params['page'] || 1;

        this.animalsService
          .allAnimals(this.page)
          .subscribe(animals => {
            console.log(animals);
            this.animals = animals;
          });
      });
  }

  search() {
    this.animalsService
      .allAnimals(this.page, this.searchText)
      .subscribe(animals => {
        console.log(animals);
        this.animals = animals;
      });


    this.searchText = null;
  }

  prevPage() {
    if (this.page === 1) {
      return;
    }

    const page = this.page - 1;
    const url = this.getUrl(page);
    this.router.navigateByUrl(url);
  }

  nextPage() {
    if (this.animals.length === 0 || this.animals.length < 10) {
      return;
    }

    const page = this.page + 1;
    const url = this.getUrl(page);
    this.router.navigateByUrl(url);
  }

  sortByDateAsc() {
    this.animals.sort((a, b) => Date.parse(a.createdOn) - Date.parse(b.createdOn));
  }

  sortByDateDesc() {
    this.animals.sort((a, b) => Date.parse(b.createdOn) - Date.parse(a.createdOn));
  }

  sortByTypeAsc() {
    this.animals.sort((a, b) => a.type.localeCompare(b.type));
  }

  sortByTypeDesc() {
    this.animals.sort((a, b) => b.type.localeCompare(a.type));
  }

  private getUrl(page) {
    let url = `animals/all?page=${page}`;
    if (this.searchText) {
      url += `&search=${this.searchText}`;
    }

    return url;
  }
}
