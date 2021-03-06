import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44306/api/"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl + "cars/getcardetail"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl + "cars/getbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl + "cars/getbycolor?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
   getByFilterCars(brandId:number,colorId:number):Observable<ListResponseModel<Car>>{
    
    
    let newPath=this.apiUrl+"cars/getbyfiltercar?brandId="+brandId+"&colorId="+colorId;
    
    
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getById(carId:number){
    let newPath=this.apiUrl+"cars/getbyid?carId="+carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }
  add(car:Car){
    return this.httpClient.post(this.apiUrl+"cars/add",car)
  }
  update(car:Car){
    return this.httpClient.post(this.apiUrl+"cars/update",car)
  }

 
}
