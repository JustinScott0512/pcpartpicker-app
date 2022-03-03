import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";

@Injectable(
    {providedIn: 'root'}
)

export class BuildGuidesService{
    private baseUrl:String="https://pcpartpicker-app-default-rtdb.firebaseio.com/";
    private buildGuidesEndPoint:string = ""

    constructor(private http:HttpClient){

    }

    getBuildGuides(){
        return this.http.get(this.baseUrl + this.buildGuidesEndPoint);
    }
}