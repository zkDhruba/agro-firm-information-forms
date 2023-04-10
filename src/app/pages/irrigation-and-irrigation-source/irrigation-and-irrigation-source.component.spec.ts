import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationAndIrrigationSourceComponent } from './irrigation-and-irrigation-source.component';

describe('IrrigationAndIrrigationSourceComponent', () => {
  let component: IrrigationAndIrrigationSourceComponent;
  let fixture: ComponentFixture<IrrigationAndIrrigationSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrrigationAndIrrigationSourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrrigationAndIrrigationSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
