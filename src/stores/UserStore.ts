import axios from '@/configs/axios';
import { UserDTO } from '@/entities/User/types/user-dto';
import { observable, action, makeObservable } from 'mobx';
import { createContext, useContext } from 'react';

class UserStore {
  @observable userData: UserDTO | null = null;
  @observable isLoading: boolean = false;
  @observable error: any = null;

  constructor() {
    makeObservable(this);
  }

  @action
  async login(data: any) {
    try {
      this.isLoading = true;
      const response = await axios.post('auth/login', data);
      this.isLoading = false;
      this.userData = response.data;
    } catch (error) {
      this.error = error;
    }
  }

  @action
  async register(data: any) {
    try {
      this.isLoading = true;
      const response = await axios.post('auth/register', data);
      this.isLoading = false;
      this.userData = response.data;
    } catch (error) {
      this.error = error;
    }
  }
}

const UserContext = createContext(new UserStore());

const useUserStore = () => useContext(UserContext);

export default useUserStore;
