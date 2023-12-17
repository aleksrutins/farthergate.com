import { TestBed } from '@angular/core/testing';

import { LangleyService } from './langley.service';

describe('LangleyService', () => {
  let service: LangleyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangleyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
