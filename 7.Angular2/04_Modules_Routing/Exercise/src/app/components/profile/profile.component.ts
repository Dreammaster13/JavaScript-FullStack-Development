import {Component, OnInit} from '@angular/core';
import {GithubDataService} from '../../services/github-data.service';

@Component({
  selector: 'app-profile',
  template: `
    <div class='profile' *ngIf='profileData'>
      <img [src]="profileData['avatar_url']" alt='Profile Photo' />
      <a href="{{profileData['html_url']}}">
        <p>{{profileData['login']}}</p>
      </a>
      <p>{{profileData['name']}}</p>
      <p>{{profileData['location']}}</p>
    </div>
  `,
  styles: [`
    .profile {
      border: solid gray 2px;
      border-radius: 10px;
      padding: 10px;
      overflow: hidden;
      margin-right: 30px;
    }
    .profile img {
      width: 60%;
      float: left;
      margin-right: 20px;
    }
  `]
})

export class ProfileComponent implements OnInit {
  profileData: {};

  constructor(private githubDataService: GithubDataService) {

  }

  ngOnInit() {
    this.githubDataService
      .getProfileData()
      .then((data) => {
        const renderData = data.json();
        console.log(renderData['avatar_url']);
        this.profileData = renderData;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
