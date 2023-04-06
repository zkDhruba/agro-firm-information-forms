import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsHarvestingComponent } from './crops-harvesting.component';

describe('CropsHarvestingComponent', () => {
  let component: CropsHarvestingComponent;
  let fixture: ComponentFixture<CropsHarvestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropsHarvestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropsHarvestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
