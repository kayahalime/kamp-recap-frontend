import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { AuthService } from 'src/app/services/auth.service';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CartService } from 'src/app/services/cart.service';
import { LocaleStorageService } from 'src/app/services/locale-storage.service';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetails: CarDetail[]; 
  carImages: CarImage[];
  carImageBasePath:string = "https://localhost:44306";
  carDetailsLoad=false;
  rentalControl = false;
  rentalMessage="";
 
  constructor(
    private authService:AuthService,
    private cardetailService: CarDetailService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService,
    private toastrService:ToastrService,
    private localeStorageService:LocaleStorageService,
    private rentalService: RentalService,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private cartService: CartService,

  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetail(params['carId']);
        this.getCarImageByCarId(params["carId"]);
         this.getCarRentalControl(params["carId"])
      }
     
    });
  }
  getCarDetail(carId: number) {
    this.cardetailService.getCarDetail(carId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  getCarImageByCarId(carId:number){
    this.carImageService.getCarImages(carId)
      .subscribe((response) => {
        this.carImages = response.data;
       
      });
  }
  isAuthenticated(){
    return this.authService.isAuthenticated()
  }
  getCurrentImageClass(image:CarImage){
    if(image == this.carImages[0]){
      return "carousel-item active"
    } else {
      return "carousel-item"
    }
  }
  getCarRentalControl(carId:number) {
    this.rentalService.getRentalCarControl(carId).subscribe((response) => { 
      this.rentalControl=response.success;
      this.rentalMessage=response.message; 
    });
  }

  
 
 
  
}
