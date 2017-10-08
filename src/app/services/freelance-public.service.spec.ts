import { TestBed, inject } from '@angular/core/testing';

import { FreelancePublicService } from './freelance-public.service';

describe('FreelancePublicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FreelancePublicService]
    });
  });

  it('should be created', inject([FreelancePublicService], (service: FreelancePublicService) => {
    expect(service).toBeTruthy();
  }));
});
