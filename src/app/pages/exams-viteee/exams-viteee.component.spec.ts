import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsViteeeComponent } from './exams-viteee.component';

describe('ExamsViteeeComponent', () => {
  let component: ExamsViteeeComponent;
  let fixture: ComponentFixture<ExamsViteeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamsViteeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamsViteeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
