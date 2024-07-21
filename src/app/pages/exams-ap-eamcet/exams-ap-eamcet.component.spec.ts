import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsApEamcetComponent } from './exams-ap-eamcet.component';

describe('ExamsApEamcetComponent', () => {
  let component: ExamsApEamcetComponent;
  let fixture: ComponentFixture<ExamsApEamcetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamsApEamcetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamsApEamcetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
