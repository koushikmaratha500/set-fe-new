import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class7SyllabusComponent } from './class7-syllabus.component';

describe('Class7SyllabusComponent', () => {
  let component: Class7SyllabusComponent;
  let fixture: ComponentFixture<Class7SyllabusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class7SyllabusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Class7SyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
