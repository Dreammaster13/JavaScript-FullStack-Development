import {Component} from '@angular/core';
import {GithubDataService} from '../../services/github-data.service';

@Component({
  selector: 'app-repos',
  template: `
    <div>
      <div *ngIf='reposData'>
        <app-repo *ngFor='let repo of reposData' [repo]='repo'></app-repo>
      </div>

      <div class='repos-btn' *ngIf='!reposData'>
        <button type='button' (click)='loadReposData()'>Show Repos</button>
      </div>
      <div class='repos-btn' *ngIf='reposData'>
        <button type='button' (click)='deleteReposData()'>Hide Repos</button>
      </div>
    </div>
  `,
  styles: [`
    .repos-btn {
      position: absolute;
      top: 380px;
      left: 10px;
    }
  `]
})

export class ReposComponent {
  reposData: Array<{}>;

  constructor(private githubDataService: GithubDataService) {
  }

  loadReposData() {
    this.githubDataService
      .getReposData()
      .then((data) => {
        const renderData = data.json();
        this.reposData = renderData;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteReposData() {
    delete this.reposData;
  }
}
