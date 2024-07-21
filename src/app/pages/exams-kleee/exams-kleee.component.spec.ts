import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsKleeeComponent } from './exams-kleee.component';

describe('ExamsKleeeComponent', () => {
  let component: ExamsKleeeComponent;
  let fixture: ComponentFixture<ExamsKleeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamsKleeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamsKleeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
