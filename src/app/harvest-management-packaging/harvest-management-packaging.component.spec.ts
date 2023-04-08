import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestManagementPackagingComponent } from './harvest-management-packaging.component';

describe('HarvestManagementPackagingComponent', () => {
  let component: HarvestManagementPackagingComponent;
  let fixture: ComponentFixture<HarvestManagementPackagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarvestManagementPackagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarvestManagementPackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
