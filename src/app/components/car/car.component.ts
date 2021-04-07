import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient} from '@angular/common/http';

import { CarService } from 'src/app/services/car.service';
import { CarDetail } from 'src/app/models/carDetail';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  carImageBasePath = "https://localhost:44306/";
  dataLoaded =false;
  filterText="";
  carImages:string[]=[];
  
 
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,
    private carDetailService:CarDetailService,private carImageService:CarImageService) { }
  
  ngOnInit(): void {
    if(this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"] && params["brandId"]){
        console.log("sdfg");
        this.getByFilterCars(params["brandId"],params["colorId"]);
      }
      else if(params["colorId"]){
        this.getCarsByBrand(params["colorId"]);
      }
      else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }
      
      }))
      this.getCarDetails();
    } 
    
  
  getCarDetails(){
    this.carService.getCars().subscribe(response =>{
      this.cars=response.data
      this.dataLoaded=true;
      for(let i=0;i<this.cars.length;i++)
      { 
        this.getOneImage(this.cars[i].carId);
      }
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response =>{
      this.cars=response.data
      this.dataLoaded=true;
       for(let i=0;i<this.cars.length;i++)
      { 
        this.getOneImage(this.cars[i].carId);
      }
    })
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response =>{
      this.cars=response.data
      this.dataLoaded=true;
      for(let i=0;i<this.cars.length;i++)
      { 
        this.getOneImage(this.cars[i].carId);
      }
    })
  }
   getByFilterCars(brandId:number,colorId:number){
    console.log(brandId+" "+colorId);
    
    this.carService.getByFilterCars(brandId,colorId).subscribe(response=>{
      console.log(response);
      this.cars=response.data
      for(let i=0;i<this.cars.length;i++)
      { 
        this.getOneImage(this.cars[i].carId);
      }
       
      
    })
  }
  getCarImage(car:Car){

    if(car.imagePath){
      return car.imagePath
    }
    else{
      return 'default.jpg'
    }
  }
  getOneImage(id:number):any{
    if( this.carImageService. getCarImageByCarId(id).subscribe(response=>{
      this.carImages[id]=response.data[0].imagePath; 
      }) ){
      this.carImageService. getCarImageByCarId(id).subscribe(response=>{
      this.carImages[id]=response.data[0].imagePath; 
      }) 
    }
    else{
      return 'default.jpg'
    }

  }
  
  }
  
  




