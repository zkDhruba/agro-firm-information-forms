import { TestBed } from '@angular/core/testing';

import { InterculturalOperationDataService } from './intercultural-operation-data.service';

describe('InterculturalOperationDataService', () => {
  let service: InterculturalOperationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterculturalOperationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
