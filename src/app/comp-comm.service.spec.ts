import { TestBed } from '@angular/core/testing';

import { CompCommService } from './comp-comm.service';

describe('CompCommService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompCommService = TestBed.get(CompCommService);
    expect(service).toBeTruthy();
  });
});
