import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

export class Account {
  constructor(public id?: number, public username?: string, public twitter?: string){}
}
const ACCOUNT: Account[] = [
  new Account(1, "Jack", "@Jack"),
  new Account(2, "Stef", "@Stef"),
  new Account(3, "Luc", "@Luc"),
];
@Injectable()
export class TwitterService {
  private _accounts: Array<Account> = ACCOUNT;

  /**
   * get accounts from the constant.
   * @returns {Observable<Account[]>}
   */
  getAccounts(): Observable<Account[]> {
    return Observable.create(obs => {
      setTimeout(()=>{
        obs.next(ACCOUNT);
        obs.complete();
      }, 1000);
    });
  }

  /**
   * Get Account according to the id.
   * @param id
   * @returns {Observable<Account> }
   */
  getAccount(id: number): Observable<Account> {
    return Observable.create(obs => {
      setTimeout(()=>{
        obs.next(this._accounts.find(account => account.id === +id));
        obs.complete();
      }, 2000);
    })
  }

}
