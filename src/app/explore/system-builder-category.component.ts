import { Component, Input } from "@angular/core";
import { SystemBuilderCategory } from "./system-builder-category";

@Component({
    selector: 'category',
    templateUrl: 'system-builder-category.component.html',
    styleUrls: ['system-builder-category.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class SystemBuilderCategoryComponent{
    showingSearchBar: Boolean = false
    @Input() name: String = "";
    @Input() textColor: String = "";
    @Input() base: String = "";
    @Input() promo: String = "";
    @Input() shipping: String = "";
    @Input() tax: String = "";
    @Input() price: String = "";
    @Input() where: String = "";

    constructor(){

    }
}