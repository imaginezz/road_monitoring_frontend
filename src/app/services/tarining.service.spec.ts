import { TestBed } from '@angular/core/testing';

import { TariningService } from './tarining.service';

describe('TariningService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TariningService = TestBed.get(TariningService);
    expect(service).toBeTruthy();
  });
});
