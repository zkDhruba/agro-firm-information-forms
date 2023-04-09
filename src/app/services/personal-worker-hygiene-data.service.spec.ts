import { TestBed } from '@angular/core/testing';

import { PersonalWorkerHygieneDataService } from './personal-worker-hygiene-data.service';

describe('PersonalWorkerHygieneDataService', () => {
  let service: PersonalWorkerHygieneDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalWorkerHygieneDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
