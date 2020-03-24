import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATMSimulatorComponent } from './atmsimulator.component';

describe('ATMSimulatorComponent', () => {
  let component: ATMSimulatorComponent;
  let fixture: ComponentFixture<ATMSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATMSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATMSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
