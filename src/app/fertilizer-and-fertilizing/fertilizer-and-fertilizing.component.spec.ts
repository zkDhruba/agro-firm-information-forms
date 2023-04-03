import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerAndFertilizingComponent } from './fertilizer-and-fertilizing.component';

describe('FertilizerAndFertilizingComponent', () => {
  let component: FertilizerAndFertilizingComponent;
  let fixture: ComponentFixture<FertilizerAndFertilizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertilizerAndFertilizingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FertilizerAndFertilizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
