import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class8SyllabusComponent } from './class8-syllabus.component';

describe('Class8SyllabusComponent', () => {
  let component: Class8SyllabusComponent;
  let fixture: ComponentFixture<Class8SyllabusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class8SyllabusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Class8SyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
