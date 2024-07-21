import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsAiimsComponent } from './exams-aiims.component';

describe('ExamsAiimsComponent', () => {
  let component: ExamsAiimsComponent;
  let fixture: ComponentFixture<ExamsAiimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamsAiimsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamsAiimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
