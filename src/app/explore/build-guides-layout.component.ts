import { Component, OnInit } from "@angular/core";
import { Buildguidesfrontcard } from "./buildguidesfrontcard";
import { build_guides_list } from "./build_guides_list";
import { BuildGuidesService } from "./buildguides.service";


@Component({
    selector: 'build-guides-layout',
    templateUrl: 'build-guides-layout.component.html',
    styleUrls: ['build-guides-layout.component.css']
})

export class BuildGuidesLayoutComponent implements OnInit{
    
    // rows: BuildGuideModel[] = [];
    
    firstRow: Buildguidesfrontcard[] = [
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
    ];
    secondRow: Buildguidesfrontcard[] = [
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),    ];
    thirdRow: Buildguidesfrontcard[] = [
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),    ];
    fourthRow: Buildguidesfrontcard[] = [
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),    ];
    fifthRow: Buildguidesfrontcard[] = [
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),    ];
    lastCard: Buildguidesfrontcard[] = [
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),    ];

    constructor(private buildGuidesService: BuildGuidesService){
        // for(var buildguide of build_guides_list){
        //     this.rows.push(buildguide);
        // }
    }

    ngOnInit(): void {
        // this.buildGuidesService.getBuildGuides().subscribe((data: BuildGuideModel[])=>{
        //     console.log("fetching build guides")
        //     console.log(data)
        // }
        // );
    }
}