import { Component } from '@angular/core';
import { Menu } from 'src/app/component/category-menu/category-menu.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  menuFromFermers: Menu = {
    title: "Best from Farmers",
    listLinks: ["Carrots", "Tomatoes", "Potatoes", "Chicken", "Pork"],
    buttonName: "More products",
  }

  menuBestSelling: Menu = {
    title: "Best selling products",
    listLinks: ["Kitchen", "Meat and fish", "Special nutrition", "Pharmacy", "Baby"],
    buttonName: "More products",
  }
}
