import {Component, Input} from '@angular/core';
import {GithubDataService} from '../../services/github-data.service';

@Component({
  selector: 'app-repo',
  template: `
    <div>
      <a href="{{repo['html_url']}}">
        <p>{{repo['full_name']}}</p>
      </a>
      <p>{{repo['description'] || 'No description available.'}}</p>

      <div *ngIf='!contributors.length'>
        <button type='button' (click)='showContributors()'>Contributors</button>
      </div>

      <div *ngIf='contributors.length'>
        <p>Contributors</p>
        <div *ngFor='let contributor of contributors; let i=index'>
          <img [src]="contributor['avatar_url']" style='height: 50px;' />
          <p>{{i + 1}}. {{contributor['login']}} | {{contributor['contributions']}} contributions</p>
          <hr />
        </div>
      </div>

      <hr />
    </div>
  `
})

export class RepoComponent {
  @Input() repo;
  contributors: Array<{}> = [];

  constructor(private githubDataService: GithubDataService) {
  }

  showContributors() {
    this.githubDataService
      .getContributorsData(this.repo.full_name)
      .then((data) => {
        this.contributors = data.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
