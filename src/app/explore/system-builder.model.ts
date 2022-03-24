export class SystemBuilderModel{
    base: number;
    promo: number;
    shipping: number;
    tax: number;
    price: number;
    where: string;

    constructor(base: number, promo: number, shipping: number, tax: number, price: number, where: string){
        this.base = base;
        this.promo = promo;
        this.shipping = shipping;
        this.tax = tax;
        this.price = price;
        this.where = where;
    }
}