import { Component, Input } from "@angular/core";

@Component({
    selector: 'add-button',
    templateUrl: 'system-builder-button.component.html',
    styleUrls: ['system-builder-button.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class SystemBuilderButtonComponent{
    showingSearchBar: Boolean = false
    @Input() text: String = "";
    @Input() textColor: String = "";
    @Input() backgroundColor: String = "";

    constructor(){

    }
}