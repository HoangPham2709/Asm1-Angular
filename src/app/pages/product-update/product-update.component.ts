import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/service/service.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent {
  product: IProduct = {
    name: '',
    price: 0
  }
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getOneProduct(id).subscribe(product => {
        this.product = product;
      }, error => console.log(error.message));
    })
  }
  onHandleSubmit() {
    this.productService.updateProduct(this.product).subscribe(product => {
      console.log(this.product)
    })
  }
}
