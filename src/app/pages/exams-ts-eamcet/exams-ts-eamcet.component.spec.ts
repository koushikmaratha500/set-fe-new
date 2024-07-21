import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsTsEamcetComponent } from './exams-ts-eamcet.component';

describe('ExamsTsEamcetComponent', () => {
  let component: ExamsTsEamcetComponent;
  let fixture: ComponentFixture<ExamsTsEamcetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamsTsEamcetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamsTsEamcetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
