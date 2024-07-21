import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IitFoundationComponent } from './iit-foundation.component';

describe('IitFoundationComponent', () => {
  let component: IitFoundationComponent;
  let fixture: ComponentFixture<IitFoundationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IitFoundationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IitFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
