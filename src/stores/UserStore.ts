import axios from '@/configs/axios';
import { UserDTO } from '@/entities/User/types/user-dto';
import { observable, action, makeObservable } from 'mobx';
import { createContext, useContext } from 'react';

class UserStore {
  @observable userData: UserDTO | null = null;

  constructor() {
    makeObservable(this);
  }

  @action
  async login(data: any) {
    const response = await axios.post('auth/login', data);
    this.userData = response.data;
  }

  @action
  async register(data: any) {
    const response = await axios.post('auth/register', data);
    this.userData = response.data;
  }
}

const UserContext = createContext(new UserStore());

export const useUserStore = () => useContext(UserContext);
