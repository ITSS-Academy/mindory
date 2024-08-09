import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicHierarchyComponent } from './topic-hierarchy.component';

describe('TopicHierarchyComponent', () => {
  let component: TopicHierarchyComponent;
  let fixture: ComponentFixture<TopicHierarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicHierarchyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
