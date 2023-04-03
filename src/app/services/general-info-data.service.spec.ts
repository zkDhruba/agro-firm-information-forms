import { TestBed } from '@angular/core/testing';

import { GeneralInfoDataService } from './general-info-data.service';

describe('GeneralInfoDataService', () => {
  let service: GeneralInfoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralInfoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
