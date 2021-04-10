import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenMoldel';
import { LocaleStorageService } from './locale-storage.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl= 'https://localhost:44306/api/auth/'

  constructor(private httpClient:HttpClient, private localeStorageService:LocaleStorageService,private userService:UserService) { }

  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    let path = this.apiUrl + "login"
    this.setCurrentUser(loginModel.email)
    return this.httpClient.post<SingleResponseModel<TokenModel>>(path, loginModel)
  }

  isAuthenticated(){
    if(this.localeStorageService.get("token")){
      return true;
    }
    else{
      return false;
    }
  }
  register(registerModel:RegisterModel):Observable<SingleResponseModel<TokenModel>>{
    let path = this.apiUrl + "register"
    return this.httpClient.post<SingleResponseModel<TokenModel>>(path, registerModel)
  }
  logout(){
    this.localeStorageService.remove("token")
    this.localeStorageService.remove("user")
  }


  private setCurrentUser(email:string){
    this.userService.getByEmail(email).subscribe(response => {
      let user = response.data
      this.localeStorageService.set("user", user)
    })
  }
}
