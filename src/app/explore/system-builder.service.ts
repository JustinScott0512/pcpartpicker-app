import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { firstValueFrom } from "rxjs";
import { SystemBuilderModel } from "./system-builder.model";

@Injectable(
    {providedIn: 'root'}
)
export class SystemBuilderService{
    private baseUrl:String="https://pcpartpicker-app-default-rtdb.firebaseio.com/";
    private systemBuilderEndPoint:string = "system-builder";

    constructor(private db:AngularFireDatabase){

    }

    getParts(){
        return this.db.list<SystemBuilderModel>(this.systemBuilderEndPoint).valueChanges();
    }

    getPart(index: number){
        return this.db.object<SystemBuilderModel>(`${this.systemBuilderEndPoint}/${index}`).valueChanges();
    }

    async addPart(part: any){
        let index = (await firstValueFrom(this.getParts())).length;
        this.db.list<SystemBuilderModel>(this.systemBuilderEndPoint).set(`${index}`, part);
    }

}