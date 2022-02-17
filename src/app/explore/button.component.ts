import { Component, Input } from "@angular/core";

@Component({
    selector: 'pcpp-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ButtonComponent{
    showingSearchBar: Boolean = false
    @Input() text: String = "";
    @Input() textColor: String = "";
    @Input() backgroundColor: String = "";

    constructor(){

    }
}