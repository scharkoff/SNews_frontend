import { observable, action } from 'mobx';
import { createContext, useContext } from 'react';

class GlobalStore {
  @observable count = 0;

  @action increment() {
    this.count++;
  }

  @action decrement() {
    this.count--;
  }
}

const StoreContext = createContext(new GlobalStore());

export const useStore = () => useContext(StoreContext);
