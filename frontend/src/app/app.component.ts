import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})

export class AppComponent {
  products: any = [{ name: 'Lenovo' }, { name: 'Huawei' }];
  // movies = [{title:'Titanic'},{title:'James Bond'}];
  constructor(private api: ApiService) {
    this.getProducts();
  }

  getProducts = () => {
    this.api.getAllProducts().subscribe(
      (data) => {
        this.products = data.results;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }
}
