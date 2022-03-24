import { Component } from '@angular/core';
import { SystemBuilderModel } from './explore/system-builder.model';
import { SystemBuilderService } from './explore/system-builder.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pcpartpicker-app';
  systembuilderparts: SystemBuilderModel[] = [];

  constructor(private sbservice: SystemBuilderService){

  }

  ngOnInit(): void{
    this.sbservice.getParts().subscribe((data: SystemBuilderModel[]) => {
        console.log("Fetching system builder parts");
        console.log(data);

        // for(var part of data){
        //   this.systembuilderparts.push(part);
        // }
    });
  }

}