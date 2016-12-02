import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TwitterService, Account} from "../twitter.service";

@Component({
  selector: 'app-twitter-detail',
  templateUrl: './twitter-detail.component.html',
  styleUrls: ['./twitter-detail.component.css'],
})
export class TwitterDetailComponent implements OnInit {
  public account = new Account();
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _twitterService: TwitterService) { }

  ngOnInit() {
    let id = this._route.snapshot.params['id'];
    this._twitterService.getAccount(id).subscribe((account)=> {
      if (account)
        this.account = account;
      else
        this._router.navigate(['/twitter']);
    })
  }

}
