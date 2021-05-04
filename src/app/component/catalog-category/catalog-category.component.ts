import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-catalog-category',
  templateUrl: './catalog-category.component.html',
  styleUrls: ['./catalog-category.component.scss']
})
export class CatalogCategoryComponent {

  menu = {
    title: "Category menu",
    listLinks: ["Bakery", "Fruit and vegetables", "Meat and fish", "Drinks", "Kitchen"],
    buttonName: "More categories",
  }
}
