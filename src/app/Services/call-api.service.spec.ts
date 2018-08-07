import { TestBed, inject } from '@angular/core/testing';

import { CallApiService } from './call-api.service';

describe('CallApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallApiService]
    });
  });

  it('should be created', inject([CallApiService], (service: CallApiService) => {
    expect(service).toBeTruthy();
  }));
});
