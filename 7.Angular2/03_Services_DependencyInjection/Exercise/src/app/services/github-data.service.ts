import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
//  import 'rxjs/add/operator/map';

@Injectable()
export class GithubDataService {
  constructor(private http: Http) {}

  username: String = 'nakov';

  getProfileData() {
    return this.http.get(`https://api.github.com/users/${this.username}`).toPromise();
  }

  getFollowersData() {
    return this.http.get(`https://api.github.com/users/${this.username}/followers`).toPromise();
  }

  getReposData() {
    return this.http.get(`https://api.github.com/users/${this.username}/repos`).toPromise();
  }

  getContributorsData(repoFullName: String) {
    return this.http.get(`https://api.github.com/repos/${repoFullName}/contributors`).toPromise();
  }
}
