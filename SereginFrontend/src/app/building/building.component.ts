import { Component, OnInit } from '@angular/core';
import { BuildingService } from './building.service';
import { IBuilding } from './building';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  public buildings: IBuilding[]=[]
  constructor(private _buildingservice: BuildingService) { }

  ngOnInit(): void {
    this._buildingservice.getBuildings().subscribe(data => this.buildings = data);
  }

}
