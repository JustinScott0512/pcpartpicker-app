import { Component } from "@angular/core";
import { SystemBuilderCategory } from "./system-builder-category";
import { SystemBuilderModel } from "./system-builder.model";
import { SystemBuilderService } from "./system-builder.service";

@Component({
    selector: 'system-builder-layout',
    templateUrl: 'system-builder-layout.component.html',
    styleUrls: ['system-builder-layout.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})

export class SystemBuilderLayoutComponent{
    constructor(private sbservice: SystemBuilderService){

    }

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

    title = 'pcpartpicker-app';

  systembuilderparts: SystemBuilderModel[] = [];
  partNames: String[] = [];

  ngOnInit(): void{
    this.sbservice.getParts().subscribe((data: SystemBuilderModel[]) => {
        console.log("Fetching system builder parts");
        console.log(data);

        this.systembuilderparts = data;

        this.partNames = data.map(x => x.part);

        console.log(this.partNames);
    });
  }

  addItem(partName: string){
    
  }

}