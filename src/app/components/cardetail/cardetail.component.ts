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
  rentalDetail: Rental[];
  userFindeksForm: FormGroup;
  findeks: number;
  carFindeks: number;
 
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
  addCart(car: Car){
    if (this.authService.isAuthenticated()){
     if(this.localeStorageService.get('findeks')){
       if (this.carFindeks < parseInt(this.localeStorageService.get('findeks')))
       {
         this.rentalService.getRentalByCarId(car.carId).subscribe(response => {
           this.rentalDetail = response.data;
         });
         this.cartService.addtoCart(car);
         this.router.navigate(['/cart']);
       }else{
         this.toastrService.error('Arabayı Kiralayamazsınız Findeks Puanınız yetmiyor.');
       }
     }else{
       this.toastrService.info('Lütfen Findeks Puanınızı Hesaplayınız');
     }
    }else{
      this.toastrService.info('Lütfen Giriş Yapınız');
    }
  }

  createUserFindeksForm() {
    this.userFindeksForm = this.formBuilder.group({
      tc: ['', Validators.required],
      dateYear: ['', Validators.required],
    });
  }

  getUserFindeks() {
    if (this.userFindeksForm.valid) {
      if (parseInt(this.localeStorageService.get('findeks')) > 0){
        this.toastrService.info('Findeks Puanınız: ' + this.localeStorageService.get('findeks'));
      }else{
        const userFindeksModel = Object.assign({}, this.userFindeksForm.value);
        this.userService.fakeFindeks(userFindeksModel).subscribe(response => {
          this.findeks = response.data.userFindeks;
          this.localeStorageService.set('findeks', this.findeks.toString());
          this.toastrService.info('Findeks Hesaplaması Başarılı. Findeks Puanınız: ' + this.findeks);
        });
      }
    }else{
      this.toastrService.info('Lütfen Findeks Hesaplaması Yapınız.');
    }
  }
 
  
}
