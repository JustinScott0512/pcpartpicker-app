import { Component } from "@angular/core";
import { SystemBuilderCategory } from "./system-builder-category";

@Component({
    selector: 'system-builder-layout',
    templateUrl: 'system-builder-layout.component.html',
    styleUrls: ['system-builder-layout.component.css']
})

export class SystemBuilderLayoutComponent{
    products: SystemBuilderCategory[] = [
        new SystemBuilderCategory("CPU", "dodgerblue"),
        new SystemBuilderCategory("GPU", "dodgerblue"),
      ];
}