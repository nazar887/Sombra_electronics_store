import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "../models/models";

@Pipe({
  name: 'calculateTotalPrice'
})
export class CalculateTotalPricePipe implements PipeTransform {
  transform(products: Product[]): number {
    return products.reduce((sum, product) => sum + product.price, 0);
  }
}
