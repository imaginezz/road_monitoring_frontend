import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPanelComponent } from './training-panel.component';

describe('TrainingPanelComponent', () => {
  let component: TrainingPanelComponent;
  let fixture: ComponentFixture<TrainingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
