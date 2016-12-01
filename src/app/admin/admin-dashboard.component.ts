import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-admin-dashboard',
    template: ` 
      <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-6">
              Dashboard informations :
              <div>
                <label for="sessionId">SessionId: </label> {{sessionId | async}}
              </div>
              <div>
                <label for="anchor">Anchor: </label> {{token | async}}
              </div>
              <div>
                <label for="modules">pre-Loaded Modules: </label> 
                    <ul>
                        <li *ngFor="let module of modules">{{ module }}</li>
                    </ul>
              </div>
            </div>
          </div>
      </div>
  `,
})
export class AdmindashboardComponent implements OnInit {
    sessionId: Observable<string>;
    token: Observable<string>;
    modules: string[];
    constructor(private _route:ActivatedRoute) {
    }

    ngOnInit() {
        // Capture de SessionID if available
        this.sessionId = this._route.queryParams.map(params => params['sessionId'] || 'None');
        // Capture the fragment if available
        this.token = this._route.fragment.map(fragment => fragment|| 'None');
    }

}
