import { TestBed } from '@angular/core/testing';

import { TedyapiService } from './tedyapi.service';

describe('TedyapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TedyapiService = TestBed.get(TedyapiService);
    expect(service).toBeTruthy();
  });
});
