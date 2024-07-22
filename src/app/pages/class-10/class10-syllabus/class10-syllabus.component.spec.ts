import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class10SyllabusComponent } from './class10-syllabus.component';

describe('Class10SyllabusComponent', () => {
  let component: Class10SyllabusComponent;
  let fixture: ComponentFixture<Class10SyllabusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class10SyllabusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Class10SyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
