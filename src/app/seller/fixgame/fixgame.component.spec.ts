import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixgameComponent } from './fixgame.component';

describe('FixgameComponent', () => {
  let component: FixgameComponent;
  let fixture: ComponentFixture<FixgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
