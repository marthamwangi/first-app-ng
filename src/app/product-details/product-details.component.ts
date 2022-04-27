import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute,
    private cartService: CartService //inject cartService
  ) { }

  ngOnInit(): void {
    //get product id from current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'))
    //find corresponding product
    this.product = products.find(product => product.id === productIdFromRoute)
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Product Added')
  }

}
