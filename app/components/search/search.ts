import {Component} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ProductService} from "../../services/product-service";

@Component({
  selector: 'auction-search',
  templateUrl: 'app/components/search/search.html',
  providers: [ProductService]
})
export default class SearchComponent {
  formModel: FormGroup;
  categories: string[];

/*
  formModel: FormGroup = new FormGroup({
    'title': new FormControl(),
    'price': new FormControl(),
    'category': new FormControl()
  });
*/

  constructor(private productService: ProductService) {
    this.categories = this.productService.getAllCategories();
    const fb = new FormBuilder();
    this.formModel = fb.group({
      'title': [null, Validators.minLength(3)],
      'price': [null, this.positiveNumberValidator],
      'category': [-1]
    })
  }

  positiveNumberValidator(control: FormControl): any {
    if (!control.value) return null;
    const price = parseInt(control.value);
    return price === null || typeof price === 'number' && price > 0
        ? null : {positivenumber: true};
  }

  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}