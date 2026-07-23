import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesLayout } from './courses-layout';

describe('CoursesLayout', () => {
  let component: CoursesLayout;
  let fixture: ComponentFixture<CoursesLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
