import { observable, action, makeObservable } from 'mobx';
import { PostDTO } from '@/entities/Post/types/post-dto';
import { createContext, useContext } from 'react';

export interface SearchResultDTO {
  items: PostDTO[];
  total: number;
}

class SearchStore {
  @observable searchResults: SearchResultDTO = { items: [], total: 0 };

  constructor() {
    makeObservable(this);
  }

  @action
  setSearchResults(results: SearchResultDTO) {
    this.searchResults = results;
  }
}

const searchStore = new SearchStore();

export default searchStore;
