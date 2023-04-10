import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalWorkerHygieneComponent } from './personal-worker-hygiene.component';

describe('PersonalWorkerHygieneComponent', () => {
  let component: PersonalWorkerHygieneComponent;
  let fixture: ComponentFixture<PersonalWorkerHygieneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalWorkerHygieneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalWorkerHygieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
