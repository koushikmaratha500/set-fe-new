import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondgradeVideosComponent } from './secondgrade-videos.component';

describe('SecondgradeVideosComponent', () => {
  let component: SecondgradeVideosComponent;
  let fixture: ComponentFixture<SecondgradeVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondgradeVideosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondgradeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
