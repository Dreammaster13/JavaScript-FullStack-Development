import {Component} from '@angular/core';
import {GithubDataService} from '../../services/github-data.service';

@Component({
  selector: 'app-followers',
  template: `
    <div class='followers'>
      <div *ngIf='followersData'>
        <div *ngFor='let follower of followersData'>
          <img [src]="follower['avatar_url']" style='height: 200px;' />
          <a href="{{follower['html_url']}}">
            <p>{{follower['login']}}</p>
          </a>
          <hr />
        </div>
      </div>

      <div class='followers-btn' *ngIf='!followersData'>
        <button type='button' (click)='loadFollowersData()'>Show Followers</button>
      </div>
      <div class='followers-btn' *ngIf='followersData'>
        <button type='button' (click)='deleteFollowersData()'>Hide Followers</button>
      </div>

    </div>
  `,
  styles: [`
    .followers {
      margin-right: 20px;
    }
    .followers-btn {
      position: absolute;
      top: 350px;
      left: 10px;
    }
  `]
})

export class FollowersComponent {
  followersData: Array<{}>;

  constructor(private githubDataService: GithubDataService) {
  }

  loadFollowersData() {
    this.githubDataService
      .getFollowersData()
      .then((data) => {
        const renderData = data.json();
        this.followersData = renderData;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteFollowersData() {
    delete this.followersData;
  }
}
