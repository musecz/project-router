/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactDetailResolveService } from './contact-detail-resolve.service';

describe('Service: ContactDetailResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactDetailResolveService]
    });
  });

  it('should ...', inject([ContactDetailResolveService], (service: ContactDetailResolveService) => {
    expect(service).toBeTruthy();
  }));
});
