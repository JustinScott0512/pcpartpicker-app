import { Component } from "@angular/core";
import { SystemBuilderCategory } from "./system-builder-category";

@Component({
    selector: 'system-builder-layout',
    templateUrl: 'system-builder-layout.component.html',
    styleUrls: ['system-builder-layout.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})

export class SystemBuilderLayoutComponent{
    products: SystemBuilderCategory[] = [
        new SystemBuilderCategory("CPU"),
        new SystemBuilderCategory("CPU Cooler"),
        new SystemBuilderCategory("Motherboard"),
        new SystemBuilderCategory("Memory"),
        new SystemBuilderCategory("Storage"),
        new SystemBuilderCategory("Video Card"),
        new SystemBuilderCategory("Case"),
        new SystemBuilderCategory("Power Supply"),
        new SystemBuilderCategory("Operating System"),
        new SystemBuilderCategory("Monitor"),
    ];
}