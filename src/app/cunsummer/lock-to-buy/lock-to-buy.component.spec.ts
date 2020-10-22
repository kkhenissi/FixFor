import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LockToBuyComponentCuns } from './lock-to-buy.component';


describe('LockToBuyComponent', () => {
  let component: LockToBuyComponentCuns;
  let fixture: ComponentFixture<LockToBuyComponentCuns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockToBuyComponentCuns ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockToBuyComponentCuns);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
