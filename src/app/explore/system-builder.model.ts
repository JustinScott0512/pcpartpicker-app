export class SystemBuilderModel{
    part: string;
    base: number;
    promo: number;
    shipping: number;
    tax: number;
    price: number;
    where: string;

    constructor(part: string, base: number, promo: number, shipping: number, tax: number, price: number, where: string){
        this.part = part;
        this.base = base;
        this.promo = promo;
        this.shipping = shipping;
        this.tax = tax;
        this.price = price;
        this.where = where;
    }
}