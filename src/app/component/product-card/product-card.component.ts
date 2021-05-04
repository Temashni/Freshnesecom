import { Component,Input } from '@angular/core';

export type Product = {
  imageUrl: string;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() price = "";
  @Input() product!: Product;
}
