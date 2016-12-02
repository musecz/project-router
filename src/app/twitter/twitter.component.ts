import { Component, OnInit } from '@angular/core';
import {TwitterService, Account} from "./twitter.service";
import {Observable} from "rxjs";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {
  public selectedId: number;
  public accounts: Observable<Account[]>;
  constructor(private _twitterService: TwitterService,
              private _router: Router,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.accounts = this._twitterService.getAccounts();
  }

  isSelected(account: Account): boolean{
   return account.id === this.selectedId;
  }
  onSelect(account: Account): void{
    this.selectedId = account.id;
    this._router.navigate([account.id],{relativeTo: this.route});
  }

}
