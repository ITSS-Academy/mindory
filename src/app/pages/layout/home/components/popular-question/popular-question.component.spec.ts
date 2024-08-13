import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularQuestionComponent } from './popular-question.component';

describe('PopularQuestionComponent', () => {
  let component: PopularQuestionComponent;
  let fixture: ComponentFixture<PopularQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
