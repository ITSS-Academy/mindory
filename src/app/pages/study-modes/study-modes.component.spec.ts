import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyModesComponent } from './study-modes.component';

describe('StudyModesComponent', () => {
  let component: StudyModesComponent;
  let fixture: ComponentFixture<StudyModesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyModesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
