import { Component } from '@angular/core';
import { Input } from '@angular/core';

export type Menu = {
  title: string;
  listLinks: string[],
  buttonName: string
}

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CatalogMenuComponent {
  @Input() menu = {
    title: "Category menu",
    listLinks: ["Bakery", "Fruit and vegetables", "Meat and fish", "Drinks", "Kitchen"],
    buttonName: "More categories",
  }
}