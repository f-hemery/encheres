/**
 * Created by hemery on 17/12/2016.
 */

import {Component, ViewEncapsulation} from "@angular/core";
import {ProductService, Product} from "../../services/product-service";
@Component({
    selector: 'auction-application',
    templateUrl: 'app/components/application/application.html',
    styleUrls: ['app/components/application/application.css'],
    encapsulation: ViewEncapsulation.None
})
export default class ApplicationComponent {
    products: Array<Product> = [];
    constructor (private productServive: ProductService) {
        this.products = this.productServive.getProducts();
    }
 }