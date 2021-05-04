import { Component, Input } from '@angular/core';
import { Menu } from '../category-menu/category-menu.component';

@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.scss']
})
export class CatalogProductComponent {
  @Input() menu!: Menu;
}
