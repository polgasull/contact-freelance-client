import { TestBed, inject } from '@angular/core/testing';

import { FreelanceApiService } from './freelance-api.service';

describe('FreelanceApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FreelanceApiService]
    });
  });

  it('should be created', inject([FreelanceApiService], (service: FreelanceApiService) => {
    expect(service).toBeTruthy();
  }));
});
