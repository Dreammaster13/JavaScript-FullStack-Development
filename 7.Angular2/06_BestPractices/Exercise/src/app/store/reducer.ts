import {IAppState} from './IAppState.interface';
import {
  GET_ALL_CARS_SUCCESS, GET_CAR_BY_ID_SUCCESS, GET_EMPTY_CAR_SUCCESS,
  GET_HOME_CARS_SUCCESS,
  ORDER_BY_DATE_ASC,
  ORDER_BY_DATE_DESC, ORDER_BY_OWNER, POST_SINGLE_CAR_SUCCESS, PUSH_SINGLE_COMMENT_SUCCESS
} from '../modules/car/car.actions';
import {
  GET_ALL_OWNERS_SUCCESS, GET_OWNER_BY_ID_SUCCESS,
  POST_SINGLE_OWNER_SUCCESS
} from '../modules/owner/owner.actions';
import {ORDER_BY_NAME} from './common.actions';


const cars = [];
const owners = [];

const initialState: IAppState = {
  cars: cars,
  owners: owners
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOME_CARS_SUCCESS:
      console.log(`reducer - switch ${action.type}`);
      console.log(state);
      return getHomeCars(state, action);

    case GET_ALL_CARS_SUCCESS:
      console.log(`reducer - switch ${action.type}`);
      return getAllCars(state, action);

    case GET_ALL_OWNERS_SUCCESS:
      return getAllOwners(state, action);

    case GET_CAR_BY_ID_SUCCESS:
      return getCarById(state, action);

    case POST_SINGLE_CAR_SUCCESS:
      return postSingleCar(state, action);

    case GET_OWNER_BY_ID_SUCCESS:
      return getOwnerById(state, action);

    case POST_SINGLE_OWNER_SUCCESS:
      return postSingleOwner(state, action);

    case PUSH_SINGLE_COMMENT_SUCCESS:
      return pushSingleComment(state, action);

    case ORDER_BY_DATE_ASC:
      console.log(`reducer - switch ${action.type}`);
      return orderByDateAsc(state, action);

    case ORDER_BY_DATE_DESC:
      console.log(`reducer - switch ${action.type}`);
      return orderByDateDesc(state, action);

    case ORDER_BY_OWNER:
      console.log(`reducer - switch ${action.orderType}`);
      return orderByOwner(state, action);

    case ORDER_BY_NAME:
      return orderByName(state, action);

    default:
      return state;
  }

  //  Functions that sets the state
  function getHomeCars(state, action) {
    console.log('reducer - getHomeCars()');
    return Object.assign({}, state, {
      cars: action.cars.slice(0, 6).sort((a, b) => b.createdOn - a.createdOn)
    });
  }

  function getAllCars(state, action) {
    console.log(state);
    console.log('reducer - getAllCars()');
    return Object.assign({}, state, {
      cars: action.cars
    });
  }

  function getAllOwners(state, action) {
    return Object.assign({}, state, {
      owners: action.owners
    });
  }

  function getCarById(state, action) {
    return Object.assign({}, state, {
      cars: [action.car]
    });
  }

  function getOwnerById(state, action) {
    return Object.assign({}, state, {
      owners: [action.owner]
    });
  }

  function postSingleCar(state, action) {
    console.log('car added successfuly!');
  }

  function postSingleOwner(state, action) {
    console.log('owner added successfully!');
  }

  function pushSingleComment(state, action) {
    //  The state is not modified and is still Frozen
    console.log('action.car isFrozen = ' + Object.isFrozen(action.car));
    console.log('action.car isExtensible = ' + Object.isExtensible(action.car));
    console.log('state.cars isFrozen = ' + Object.isFrozen(state.cars));
    console.log('state.cars isExtensible = ' + Object.isExtensible(state.cars));

    return Object.assign({}, state, {
      cars: [action.car]
    });
  }

  function orderByDateAsc(state, action) {
    console.log(`reducer - orderbyDateAsc() - ${action.collection}`);

    const collection = action.collection;

    //  Trick to escape from the frozen state
    const mapped = state[collection].map((car, i) => {
      return {index: i, value: car};
    });
    mapped.sort((a, b) => a.value.createdOn - b.value.createdOn);
    const orderedResult = mapped.map((el) => {
      return state[collection][el.index];
    });

    return Object.assign({}, state, {
      [collection]: orderedResult
    });
  }

  function orderByDateDesc(state, action) {
    console.log(`reducer - orderbyDateAsc() - ${action.collection}`);

    const collection = action.collection;

    //  Trick to escape from the frozen state
    const mapped = state[collection].map((el, i) => {
      return {index: i, value: el};
    });
    mapped.sort((a, b) => b.value.createdOn - a.value.createdOn);
    const orderedResult = mapped.map((el) => {
      return state[collection][el.index];
    });

    return Object.assign({}, state, {
      [collection]: orderedResult
    });
  }

  function orderByOwner(state, action) {
    console.log(`reducer - orderByOwner ${action.orderType}`);

    //  Trick to escape from the frozen state
    const mapped = state.cars.map((el, i) => {
      return {index: i, value: el};
    });

    switch (action.orderType) {
      case 'ascending':
        mapped.sort((a, b) => a.value.owner.localeCompare(b.value.owner));
        break;

      case 'descending':
        mapped.sort((a, b) => b.value.owner.localeCompare(a.value.owner));
        break;
    }

    const orderedResult = mapped.map((el) => {
      return state.cars[el.index];
    });

    return Object.assign({}, state, {
      cars: orderedResult
    });
  }

  function orderByName(state, action) {
    const mapped = state.owners.map((el, i) => {
      return {index: i, value: el};
    });

    switch (action.orderType) {
      case 'ascending':
        mapped.sort((a, b) => a.value.name.localeCompare(b.value.name));
        break;

      case 'descending':
        mapped.sort((a, b) => b.value.name.localeCompare(a.value.name));
        break;
    }

    const orderedResult = mapped.map((el) => {
      return state.owners[el.index];
    });

    return Object.assign({}, state, {
      owners: orderedResult
    });
    //  Again the above is trick to escape from the frozen state
  }
}
