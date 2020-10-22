import { TestBed } from '@angular/core/testing';


describe('FoodsproductService', () => {
  let service: FoodsProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodsProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
