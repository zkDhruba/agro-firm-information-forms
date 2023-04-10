import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarantineControlMeasureComponent } from './quarantine-control-measure.component';

describe('QuarantineControlMeasureComponent', () => {
  let component: QuarantineControlMeasureComponent;
  let fixture: ComponentFixture<QuarantineControlMeasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarantineControlMeasureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuarantineControlMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
