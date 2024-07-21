import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsJeemainComponent } from './exams-jeemain.component';

describe('ExamsJeemainComponent', () => {
  let component: ExamsJeemainComponent;
  let fixture: ComponentFixture<ExamsJeemainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamsJeemainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamsJeemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
