export class Product {
    id: number;
    designation = '';
    description = '';
    imageUrl = '';
    logoSaler = '';
    linkProduct = '';
    ProductSold = false;
    productLoked = false;
    initialPrice: number;
    currentPrice: number;
    key = '';
    saledate: Date = new Date();
    dateOfSale: Date = null;


}
