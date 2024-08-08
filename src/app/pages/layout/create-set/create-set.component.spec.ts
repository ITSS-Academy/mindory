import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSetComponent } from './create-set.component';

describe('CreateSetComponent', () => {
  let component: CreateSetComponent;
  let fixture: ComponentFixture<CreateSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
