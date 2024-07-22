import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class9SyllabusComponent } from './class9-syllabus.component';

describe('Class9SyllabusComponent', () => {
  let component: Class9SyllabusComponent;
  let fixture: ComponentFixture<Class9SyllabusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class9SyllabusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Class9SyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
