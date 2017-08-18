import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from './IAppState.interface';

export const ORDER_BY_DATE_ASC = 'cars/ORDER_BY_DATE_ASC';
export const ORDER_BY_DATE_DESC = 'cars/ORDER_BY_DATE_DESC';
export const ORDER_BY_OWNER = 'cars/ORDER_BY_OWNER';
export const ORDER_BY_NAME = 'cars/ORDER_BY_NAME';

@Injectable()
export class CommonActions {
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  //  All will be Generic later

  orderByDateAsc(collection) {
    console.log('common actions - orderByDateAsc()');
    this.ngRedux.dispatch({
      type: ORDER_BY_DATE_ASC,
      collection
    });
  }

  orderByDateDesc(collection) {
    console.log('common actions - orderByDateDesc()');
    this.ngRedux.dispatch({
      type: ORDER_BY_DATE_DESC,
      collection
    });
  }

  orderByOwner(orderType) {
    console.log('common actions - orderByOwner()');
    this.ngRedux.dispatch({
      type: ORDER_BY_OWNER,
      orderType
    });
  }

  orderByName(orderType) {
    this.ngRedux.dispatch({
      type: ORDER_BY_NAME,
      orderType
    });
  }
}
