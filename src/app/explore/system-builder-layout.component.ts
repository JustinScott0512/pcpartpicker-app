import { Component } from "@angular/core";
import { SystemBuilderCategory } from "./system-builder-category";

@Component({
    selector: 'system-builder-layout',
    templateUrl: 'system-builder-layout.component.html',
    styleUrls: ['system-builder-layout.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})

export class SystemBuilderLayoutComponent{
    products: SystemBuilderCategory[] = [
        new SystemBuilderCategory("CPU", "var(--blue)"),
        new SystemBuilderCategory("CPU Cooler", "var(--blue)"),
        new SystemBuilderCategory("Motherboard", "var(--blue)"),
        new SystemBuilderCategory("Memory", "var(--blue)"),
        new SystemBuilderCategory("Storage", "var(--blue)"),
        new SystemBuilderCategory("Video Card", "var(--blue)"),
        new SystemBuilderCategory("Case", "var(--blue)"),
        new SystemBuilderCategory("Power Supply", "var(--blue)"),
        new SystemBuilderCategory("Operating System", "var(--blue)"),
        new SystemBuilderCategory("Monitor", "var(--blue)"),
    ];
}