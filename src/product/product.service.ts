import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = ['Product 1', 'Product 2', 'Product 3'];

  getAllProducts(): string[] {
    return this.products;
  }
}
