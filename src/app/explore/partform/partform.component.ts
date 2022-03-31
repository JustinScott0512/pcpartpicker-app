import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SystemBuilderService } from '../system-builder.service';

@Component({
  selector: 'app-partform',
  templateUrl: './partform.component.html',
  styleUrls: ['./partform.component.css']
})
export class PartformComponent{

  form = this.formBuilder.group({
    part: "",
    price: 0
  });

  constructor(private sbservice: SystemBuilderService, private formBuilder: FormBuilder) {}

  onSubmit(){
    this.sbservice.addPart(this.form.value);
    this.form = this.formBuilder.group({
      part: "",
      price: 0
    });
  }

}
