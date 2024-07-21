import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsVsatComponent } from './exams-vsat.component';

describe('ExamsVsatComponent', () => {
  let component: ExamsVsatComponent;
  let fixture: ComponentFixture<ExamsVsatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamsVsatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamsVsatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
