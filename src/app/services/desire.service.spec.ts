import { TestBed } from '@angular/core/testing';

import { DesireService } from './desire.service';

describe('DesireService', () => {
  let service: DesireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
