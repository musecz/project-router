import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-admin-dashboard',
    template: ` 
      <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-6">
              Dashboard informations
            </div>
          </div>
      </div>
  `,
})
export class AdmindashboardComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
