import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCartComponent } from "./product-cart/product-cart.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCartComponent],
  template: `
  <div class="p-8 grid grid-cols-2 md:grid-cols-4 gap-4" >
    @for(product of products();track product.id){
      <app-product-cart [product]="product"/>

    }
  </div>
  `,
  styles: ``
})
export class ProductsListComponent {
  products= signal<Product[]>([    {
    id: 1,
    title: "To Kill a Mockingbird",
    writer: "Harper Lee",
    image: "https://i.pinimg.com/736x/52/c4/5e/52c45e2f8b708794bcc3653265d9211c.jpg",
    price: 12.99,
    stock: 5
},
{
    id: 2,
    title: "1984",
    writer: "George Orwell",
    image: "https://i.pinimg.com/736x/43/75/b7/4375b7d9bf24b88aa53744b417227485.jpg",
    price: 9.99,
    stock: 8
},
{
    id: 3,
    title: "The Great Gatsby",
    writer: "F. Scott Fitzgerald",
    image: "https://i.pinimg.com/736x/73/28/7e/73287eca634bee31b353af9b08d58d10.jpg",
    price: 10.49
},
{
    id: 4,
    title: "Moby Dick",
    writer: "Herman Melville",
    image: "https://i.pinimg.com/736x/7f/0d/93/7f0d936208552b88ed416a9c650d535d.jpg",
    price: 14.50,
    stock: 3
},
{
    id: 5,
    title: "Prideand Prejudice ",
    writer: "Jane Austen",
    image: "https://i.pinimg.com/736x/8e/17/6a/8e176a8b0c8755ac425c1abe143cefed.jpg",
    price: 11.99,
    stock: 7
},
{
    id: 6,
    title: "The Catcher in the Rye",
    writer: "J.D. Salinger",
    image: "https://i.pinimg.com/736x/4b/be/9c/4bbe9c695bd2c2005847108120df0612.jpg",
    price: 13.49,
    stock: 6
},
{
    id: 7,
    title: "Brave New World",
    writer: "Aldous Huxley",
    image: "https://i.pinimg.com/736x/e2/c1/50/e2c1508a0ce208e2e78e8cf7d8f7771a.jpg",
    price: 12.25
},
{
    id: 8,
    title: "The Hobbit",
    writer: "J.R.R. Tolkien",
    image: "https://i.pinimg.com/736x/76/9f/51/769f51d079c66c1a9317b6f5df4859b5.jpg",
    price: 15.99,
    stock: 10
}])
}
