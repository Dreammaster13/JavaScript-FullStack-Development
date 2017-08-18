import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import {GithubDataService} from './services/github-data.service';
import { AppComponent } from './app.component';
import {ProfileComponent} from './components/profile/profile.component';
import {FollowersComponent} from './components/followers/followers.component';
import {ReposComponent} from './components/repos/repos.component';
import {RepoComponent} from './components/repo/repo.component';
import {ContributorsComponent} from './components/contributors/contributors.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FollowersComponent,
    ReposComponent,
    RepoComponent,
    ContributorsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [GithubDataService],  //  will make the service global
  bootstrap: [AppComponent]
})
export class AppModule { }
