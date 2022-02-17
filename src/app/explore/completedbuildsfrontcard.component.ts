import { Component } from "@angular/core";

@Component({
    selector: 'completedbuilds-frontcard',
    templateUrl: 'completedbuildsfrontcard.component.html',
    styleUrls: ['completedbuildsfrontcard.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class CompletedBuildsFrontCardComponent{
    showingSearchBar: Boolean = false
}