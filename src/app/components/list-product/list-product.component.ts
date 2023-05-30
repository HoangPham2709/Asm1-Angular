import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/service/service.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((data: IProduct[]) => {
      this.products = data
    }, (error: any) => console.log(error));
  }

  removeItem(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      console.log(this.products)
      console.log('Delete Success')
      this.products = this.products.filter(item => item.id == id);
    })
  }

}
