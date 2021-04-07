import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrl="https://localhost:44306/api/"
  constructor(private httpClient:HttpClient) { }
  add(register:Register){
    return this.httpClient.post(this.apiUrl+"register",register)
  }
}
