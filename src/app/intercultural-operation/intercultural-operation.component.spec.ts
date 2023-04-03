import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterculturalOperationComponent } from './intercultural-operation.component';

describe('InterculturalOperationComponent', () => {
  let component: InterculturalOperationComponent;
  let fixture: ComponentFixture<InterculturalOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterculturalOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterculturalOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
