import { TestBed } from '@angular/core/testing';

import { ExoApiService } from './exo-api.service';

describe('ExoApiService', () => {
  let service: ExoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
