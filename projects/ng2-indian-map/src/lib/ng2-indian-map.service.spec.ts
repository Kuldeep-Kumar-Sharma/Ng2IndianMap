import { TestBed } from '@angular/core/testing';

import { Ng2IndianMapService } from './ng2-indian-map.service';

describe('Ng2IndianMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng2IndianMapService = TestBed.get(Ng2IndianMapService);
    expect(service).toBeTruthy();
  });
});
