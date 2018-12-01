import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWholeListComponent } from './display-whole-list.component';

describe('DisplayWholeListComponent', () => {
  let component: DisplayWholeListComponent;
  let fixture: ComponentFixture<DisplayWholeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayWholeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayWholeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
