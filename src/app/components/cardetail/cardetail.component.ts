import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';



@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetails: Car[];
  carImages: CarImage[];
  carImageBasePath:string = "https://localhost:44306";
 
 
  constructor(
    private cardetailService: CarDetailService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetail(params['carId']);
        this.getCarImageByCarId(params["carId"]);
      }
     
    });
  }
  getCarDetail(carId: number) {
    this.cardetailService.getCarDetail(carId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  getCarImageByCarId(carId:number){
    this.carImageService.getCarImageByCarId(carId)
      .subscribe((response) => {
        this.carImages = response.data;
       
      });
  }
  getCurrentImageClass(image:CarImage){
    if(image == this.carImages[0]){
      return "carousel-item active"
    } else {
      return "carousel-item"
    }
  }
 
  
}
