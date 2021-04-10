import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44306/api/"
  constructor(private httpClient:HttpClient) { }

  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let path = this.apiUrl + "carimages/getimagesbycarid?id=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(path);
  }

  add(carImageFile:FormData):Observable<ResponseModel>{
    let path = this.apiUrl + "carimages/add";
    return this.httpClient.post<ResponseModel>(path, carImageFile);
  }

  delete(carImage:CarImage):Observable<ResponseModel>{
    let path = this.apiUrl + "carimages/delete";
    return this.httpClient.post<ResponseModel>(path, carImage);
  }
  upload(carImageAdd:CarImage): Observable<ResponseModel> {
    let newPath = this.apiUrl + "carimages";
    return this.httpClient.post<ResponseModel>(newPath,carImageAdd);
  }

  update(carImage:CarImage):Observable<ResponseModel>{
    let path = this.apiUrl + "carimages/update";
    return this.httpClient.post<ResponseModel>(path, carImage);
  }
}
