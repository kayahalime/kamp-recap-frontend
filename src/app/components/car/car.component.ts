import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient} from '@angular/common/http';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarService } from 'src/app/services/car.service';
import { CarDetail } from 'src/app/models/carDetail';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDetail[]=[];
 dataLoaded =false;
  constructor(private carService:CarService) { }
  
  ngOnInit(): void {
    this.getCarDetails();
  }
  getCarDetails(){
    this.carService.getCars().subscribe(response =>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }

}
