import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IBuilding } from "./building";

@Injectable()
export class BuildingService{

    constructor(private http: HttpClient){}

    getBuildings(): Observable<IBuilding[]>
    {
        return this.http.get<IBuilding[]>("http://localhost:5001/api/Buildings");
    }
}