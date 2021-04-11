import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';
import { ResponseModel } from '../models/responseModel';



@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44306/api/"
  
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+'rentals/getrentaldetail');
  }

  getRentalByCarId(id:number){
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+'rentals/detailsbycar?id='+id);
  }

  add(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"addrental",rental);
  }

  getTotalRentedCar():Observable<ListResponseModel<ResponseModel>>{
    return this.httpClient.get<ListResponseModel<ResponseModel>>(this.apiUrl + 'rentals/totalrentedcar');
  }
  getRentalCarControl(carId: number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "getcarcontrol?carId="+carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

}
