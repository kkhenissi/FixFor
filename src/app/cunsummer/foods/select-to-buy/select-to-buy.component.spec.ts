import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectToBuyComponentCuns } from './select-to-buy.component';


describe('SelectToBuyComponent', () => {
  let component: SelectToBuyComponentCuns;
  let fixture: ComponentFixture<SelectToBuyComponentCuns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectToBuyComponentCuns ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectToBuyComponentCuns);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
