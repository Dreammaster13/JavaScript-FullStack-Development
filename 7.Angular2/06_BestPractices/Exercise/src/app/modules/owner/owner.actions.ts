import {NgRedux} from 'ng2-redux';
import {Injectable} from '@angular/core';
import {IAppState} from '../../store/IAppState.interface';
import {DataService} from '../../services/data.service';

export const GET_ALL_OWNERS_SUCCESS = 'owners/ALL_OWNERS_SUCCESS';
export const GET_OWNER_BY_ID_SUCCESS = 'owners/BY_ID_SUCCESS';
export const POST_SINGLE_OWNER_SUCCESS = 'owners/POST_SINGLE_SUCCESS';

@Injectable()
export class OwnerActions {
  constructor(private ngRedux: NgRedux<IAppState>,
              private dataService: DataService) {
  }

  getOwnersAll() {
    this.dataService
      .getOwnersAll()
      .then((owners) => {
        this.ngRedux.dispatch({
          type: GET_ALL_OWNERS_SUCCESS,
          owners
        });
      })
      .catch(err => console.log(err));
  }

  getOwnerById(id) {
    this.dataService
      .getOwnerById(id)
      .then((owner) => {
        this.ngRedux.dispatch({
          type: GET_OWNER_BY_ID_SUCCESS,
          owner
        });
      })
      .catch(err => console.log(err));
  }

  postSingleOwner(newOwner) {
    this.dataService
      .postSingleOwner(newOwner)
      .then((owner) => {
        this.ngRedux.dispatch({
          type: POST_SINGLE_OWNER_SUCCESS,
          owner
        });
      })
      .catch(err => console.log(err));
  }

}
