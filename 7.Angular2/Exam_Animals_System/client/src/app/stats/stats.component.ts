import {Component, OnInit} from '@angular/core';

import {HttpService} from '../core/http.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html'
})
export class StatsComponent implements OnInit {
  stats: object = {};

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService
      .get('stats')
      .subscribe(res => {
        console.log(res);
        this.stats = res;
      });
  }
}
