import { TestBed } from '@angular/core/testing';

import { CompAdderService } from './comp-adder.service';

describe('CompAdderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompAdderService = TestBed.get(CompAdderService);
    expect(service).toBeTruthy();
  });
});
