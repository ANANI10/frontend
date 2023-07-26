import { TestBed } from '@angular/core/testing';

import { ApproService } from './appro.service';

describe('ApproService', () => {
  let service: ApproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
