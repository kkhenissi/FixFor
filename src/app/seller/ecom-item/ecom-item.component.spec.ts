import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomItemComponent } from './ecom-item.component';

describe('EcomItemComponent', () => {
  let component: EcomItemComponent;
  let fixture: ComponentFixture<EcomItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
