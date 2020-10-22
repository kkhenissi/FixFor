import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CunsummerComponent } from './cunsummer.component';

describe('CunsummerComponent', () => {
  let component: CunsummerComponent;
  let fixture: ComponentFixture<CunsummerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CunsummerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CunsummerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
