import { Component, Input } from "@angular/core";

@Component({
    selector: 'buildguides-frontcard',
    templateUrl: 'buildguidesfrontcard.component.html',
    styleUrls: ['buildguidesfrontcard.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class BuildGuidesFrontCardComponent{
    @Input() name: String = "";
    @Input() cpu: String = "";
    @Input() gpu: String = "";
    @Input() case: String = "";
    @Input() cost: String = "";
    @Input() comments: String = "";
    @Input() picture: String = "";

    constructor(){

    }

}