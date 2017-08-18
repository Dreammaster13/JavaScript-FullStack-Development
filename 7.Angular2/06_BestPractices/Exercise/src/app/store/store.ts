import {
  createStore,
  applyMiddleware,
  compose,
  GenericStoreEnhancer
} from 'redux';
import {reducer} from './reducer';
import freezeState from './freezeState';
import {IAppState} from './IAppState.interface';

declare var window: any;
const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension)
  ? window.devToolsExtension() : (f) => f;

export const store = createStore<IAppState>(
  reducer,
  compose(
    applyMiddleware(freezeState),
    devToolsExtension
  ) as GenericStoreEnhancer
);
