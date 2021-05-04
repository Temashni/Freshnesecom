import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogProductComponent } from './component/catalog-product/catalog-product.component';
import { CatalogCategoryComponent } from './component/catalog-category/catalog-category.component';
import { CatalogCardComponent } from './component/category-card/category-card.component';
import { CatalogMenuComponent } from './component/category-menu/category-menu.component';
import { HeaderComponent } from './component/header/header.component';
import { MenuComponent } from './component/menu/menu.component';
import { SearchComponent } from './component/search/search.component';
import { HomePage } from './pages/home/home.page';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ReviewsComponent } from './component/reviews/reviews.component';
import { CatalogComponent } from './component/catalog/catalog.component';
import { BlogComponent } from './component/blog/blog.component';
import { InfoComponent } from './component/info/info.component';
import { ProductTagsComponent } from './component/product-tags/product-tags.component';
import { СopyrightComponent } from './component/copyright/copyright.component';
import { CategoriesPage } from './pages/categories/categories.page';
import { CatalogFruitVegetablesComponent } from './component/catalog-fruit-vegetables/catalog-fruit-vegetables.component';
import { FruitVegetablesComponent } from './component/fruit-vegetables/fruit-vegetables.component';
import { FruitVegetablesCategoriesComponent } from './component/fruit-vegetables-categories/fruit-vegetables-categories.component';


@NgModule({
  declarations: [
    AppComponent,

    // pages
    HomePage,
    CategoriesPage,

    // component
    HeaderComponent,
    SearchComponent,
    MenuComponent,
    CatalogCategoryComponent,
    CatalogCardComponent,
    CatalogMenuComponent,
    CatalogProductComponent,
    ProductCardComponent,
    ReviewsComponent,
    CatalogComponent,
    BlogComponent,
    InfoComponent,
    ProductTagsComponent,
    СopyrightComponent,
    CatalogFruitVegetablesComponent,
    FruitVegetablesComponent,
    FruitVegetablesCategoriesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
