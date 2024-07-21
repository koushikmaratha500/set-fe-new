import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndhraBoardComponent } from './andhra-board.component';

describe('AndhraBoardComponent', () => {
  let component: AndhraBoardComponent;
  let fixture: ComponentFixture<AndhraBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndhraBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AndhraBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
