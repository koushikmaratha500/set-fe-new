import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstgradeVideosComponent } from './firstgrade-videos.component';

describe('FirstgradeVideosComponent', () => {
  let component: FirstgradeVideosComponent;
  let fixture: ComponentFixture<FirstgradeVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstgradeVideosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstgradeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
