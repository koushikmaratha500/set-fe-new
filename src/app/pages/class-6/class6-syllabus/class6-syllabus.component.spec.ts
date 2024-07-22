import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class6SyllabusComponent } from './class6-syllabus.component';

describe('Class6SyllabusComponent', () => {
  let component: Class6SyllabusComponent;
  let fixture: ComponentFixture<Class6SyllabusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class6SyllabusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Class6SyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
