import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomrcComponent } from './ecomrc.component';

describe('EcomrcComponent', () => {
  let component: EcomrcComponent;
  let fixture: ComponentFixture<EcomrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomrcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
