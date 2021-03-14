import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44306/api/cars/getcardetail"
  constructor(private httpClient:HttpClient) { }
  getCars():Observable<CarDetailResponseModel>{
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl);
  }
}
