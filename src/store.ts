import { observable, action, makeObservable } from 'mobx';
import { createContext, useContext } from 'react';

class GlobalStore {
  @observable
  count = 0;

  constructor() {
    makeObservable(this);
  }

  @action
  increment() {
    this.count++;
  }

  @action
  decrement() {
    this.count--;
  }
}

const StoreContext = createContext(new GlobalStore());

export const useStore = () => useContext(StoreContext);
