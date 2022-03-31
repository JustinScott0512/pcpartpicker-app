import { Component, Input } from "@angular/core";

@Component({
  selector: 'prices',
  templateUrl: 'system-builder-prices.component.html',
  styleUrls: ['system-builder-prices.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})

export class SystemBuilderPricesComponent{
  @Input() base: number = 0;
  @Input() promo: number = 0;
  @Input() shipping: number = 0;
  @Input() tax: number = 0;
  @Input() price: number = 0;
  @Input() where: string = "";

  showingSearchBar: Boolean = false

  constructor(){
      
  }

}