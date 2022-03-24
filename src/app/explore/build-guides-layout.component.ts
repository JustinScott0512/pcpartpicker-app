import { Component, OnInit } from "@angular/core";
import { Buildguidesfrontcard } from "./buildguidesfrontcard";

@Component({
    selector: 'build-guides-layout',
    templateUrl: 'build-guides-layout.component.html',
    styleUrls: ['build-guides-layout.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})

export class BuildGuidesLayoutComponent{
    
    
    rows: Buildguidesfrontcard[] = [
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
    ];
    
    lastRow: Buildguidesfrontcard[] = [
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
    ];

        
}