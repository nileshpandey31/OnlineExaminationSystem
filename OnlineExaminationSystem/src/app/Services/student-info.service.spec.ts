import { TestBed } from '@angular/core/testing';

import { StudentInfoService } from './student-info.service';

describe('StudentInfoService', () => {
  let service: StudentInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
