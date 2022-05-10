import { Component, OnInit } from '@angular/core';
import { BuildingService } from './building.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  buildings: any;
  constructor(private service: BuildingService) { }

  ngOnInit(): void {
    this.service.getBuildings().subscribe(data => this.buildings = data);
  }

}
