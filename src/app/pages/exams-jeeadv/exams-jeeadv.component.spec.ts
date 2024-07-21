import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsJeeadvComponent } from './exams-jeeadv.component';

describe('ExamsJeeadvComponent', () => {
  let component: ExamsJeeadvComponent;
  let fixture: ComponentFixture<ExamsJeeadvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamsJeeadvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamsJeeadvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
