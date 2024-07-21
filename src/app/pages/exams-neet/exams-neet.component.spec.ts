import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsNeetComponent } from './exams-neet.component';

describe('ExamsNeetComponent', () => {
  let component: ExamsNeetComponent;
  let fixture: ComponentFixture<ExamsNeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamsNeetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamsNeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
