import { Component } from "@angular/core";

@Component({
    selector: 'bottom-navbar',
    templateUrl: 'bottomnavbar.component.html',
    styleUrls: ['bottomnavbar.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class BottomNavBarComponent{
    showingSearchBar: Boolean = false
}