import { Component, Input } from "@angular/core";

@Component({
    selector: 'category',
    templateUrl: 'system-builder-category.component.html',
    styleUrls: ['system-builder-category.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class SystemBuilderCategoryComponent{
    showingSearchBar: Boolean = false
    @Input() name: String = "";
}