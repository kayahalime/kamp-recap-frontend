import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44306/api/"
  constructor(private httpClient:HttpClient) { }
  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl+"brands/getall");
  }
  add(brand:Brand){
    return this.httpClient.post(this.apiUrl+"brands/add",brand)
  }
  update(brand:Brand){
    return this.httpClient.post(this.apiUrl+"brands/update",brand)
  }
  getById(brandId:number){
    let newPath=this.apiUrl+"brands/getbyid?brandId="+brandId;
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }
  
}
