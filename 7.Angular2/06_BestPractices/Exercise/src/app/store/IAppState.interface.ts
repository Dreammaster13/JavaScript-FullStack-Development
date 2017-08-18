import {Car} from '../interfaces/car.interface';
import {Owner} from '../interfaces/owner.interface';

export interface IAppState {
  cars: Array<Car>;
  owners: Array<Owner>;
}
