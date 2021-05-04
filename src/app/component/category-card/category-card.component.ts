import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CatalogCardComponent {
  @Input() title:string = ""; 
}