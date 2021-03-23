import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44306/api/carimages/";
  constructor(private httpClient: HttpClient) { }

  getCarImageByCarId(carId: number): Observable<ListResponseModel<CarImage>>{
    let newApiUrl = this.apiUrl + "getimagesbycarid?id=" + carId;

    return this.httpClient.get<ListResponseModel<CarImage>>(newApiUrl);
}
}
