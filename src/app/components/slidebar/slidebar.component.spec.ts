import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidebarComponent } from './slidebar.component';

describe('SlidebarComponent', () => {
  let component: SlidebarComponent;
  let fixture: ComponentFixture<SlidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
