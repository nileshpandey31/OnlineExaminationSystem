import { TestBed } from '@angular/core/testing';

import { QusnInfoService } from './qusn-info.service';

describe('QusnInfoService', () => {
  let service: QusnInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QusnInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
