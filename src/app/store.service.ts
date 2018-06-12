import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { Observable } from 'rxjs/Observable';
// import BehaviorSubject
// import Observable


@Injectable()
export class StoreService {

  private searchInput = new BehaviorSubject('');

  constructor() { }

  getSearchInputObservable(): Observable<string> {
    return this.searchInput.asObservable();
  }

  setSearchInputBehavior(searchInput: string): void {
    this.searchInput.next(searchInput);
  }

}
