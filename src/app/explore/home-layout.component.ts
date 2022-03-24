import { Component } from "@angular/core";
import { Buildguidesfrontcard } from "./buildguidesfrontcard";


@Component({
    selector: 'home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})

export class HomeLayoutComponent{
    cards: Buildguidesfrontcard[] = [
        new Buildguidesfrontcard("Entry Level Intel Gaming Build", "Intel Core i3-10100", "GeForce GTX 1650 SUPER", "Cooler Master MasterBox Q300L MicroATX Mini Tower", 1041.91, 162, ""),
        new Buildguidesfrontcard("Modest AMD Gaming Build", "AMD Ryzen 5 5600G", "GeForce GTX 1660 SUPER", "Fractal Design Focus G Mini MicroATX Mini Tower", 1177.73, 126, ""),
        new Buildguidesfrontcard("Magnificent AMD Gaming/Streaming Build", "AMD Ryzen 5 5600X", "GeForce RTX 3080", "be quiet! Pure Base 500DX ATX Mid Tower", 3005.73, 169, "")
      ];
}