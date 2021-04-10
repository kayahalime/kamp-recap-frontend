import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Rental } from 'src/app/models/rental';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { CartService } from 'src/app/services/cart.service';
import { LocaleStorageService } from 'src/app/services/locale-storage.service';
import { RentalService } from 'src/app/services/rental.service';
//import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

//   cartItem: CartItem;
//   baseUrl:string = "https://localhost:44306";
//   //model: NgbDate;
//   rentalResponse: Rental[];
//   now = new Date();
//   date: string;
//   totalPrice: number = 0;
//   carDetailReturnDate: Date;
//  // minRentDate: NgbDate;
//  // minRentalDate: NgbDate;
//  // rentDate: NgbDate;

//   constructor(private cartService: CartService, private rentalService: RentalService,
//               private  toastrService: ToastrService, private router: Router,
//               private localStorageService:LocaleStorageService) {
//   }

   ngOnInit(): void {
     
  }

//   load(){
//     var cartItem = this.cartService.list();
//     if (cartItem.length == 0) {
//       this.toastrService.info('Sepetiniz Boş. Yönlendiriliyorsunuz...');
//       this.router.navigate(['/']);
//     } else {
//       cartItem = cartItem;
//       this.totalPrice = this.cartItem.carDetail.dailyPrice;
//       this.rentalService.getRentalByCarId(this.cartItem.carDetail.carId).subscribe(response => {
//         this.checkMinDateAndReturnDate(response);
//       });
//     }
//   }

//   checkMinDateAndReturnDate(response: any) {
//     if (response.data.length != 0) {
//       this.rentalResponse = response.data;
//       this.carDetailReturnDate = this.rentalResponse[this.rentalResponse.length - 1].returnDate;
//       var fullDate = this.carDetailReturnDate.toString().split('-', 3);
//       var year = parseInt(fullDate[0]);
//       var month = parseInt(fullDate[1]);
//       var day = parseInt(fullDate[2]);
//       if (
//         year > this.now.getFullYear()
//         || year == this.now.getFullYear() && month > this.now.getMonth()
//         || year == this.now.getFullYear() && month == this.now.getMonth()
//         && day > this.now.getDate()) {
//         this.minRentDate = new NgbDate(year, month, day + 1);
//         this.minRentalDate = new NgbDate(year, month, day + 2);
//         this.toastrService.info('Minimum Alış Tarihi Aracın Dönüş Tarihine Göre Hesaplanmıştır.');
//       } else {
//         this.minRentDate = new NgbDate(this.now.getFullYear(),
//           this.now.getMonth() + 1, this.now.getDate());
//         this.minRentalDate = new NgbDate(this.now.getFullYear(),
//           this.now.getMonth() + 1, this.now.getDate());
//       }
//       this.model = this.minRentalDate;
//       this.rentDate = this.minRentDate;
//     } else {
//       this.minRentDate = new NgbDate(this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate());
//       this.minRentalDate = new NgbDate(this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate());
//       this.model = this.minRentalDate;
//       this.rentDate = this.minRentDate;
//     }
//   }


//   createRental() {
//     if (!this.checkCarReturnDate()) {
//       this.router.navigate(['/cart']);
//     } else {
//       let myRental: RentalDetail = {
        
//         rentDate: new Date(this.rentDate.year, this.rentDate.month - 1, this.rentDate.day + 1),
//         returnDate: new Date(this.model.year, this.model.month - 1, this.model.day + 1),
//         carId: this.cartItem.carDetail.carId,
//         userId: parseInt(this.localStorageService.get('carId')),
//       };
//       this.router.navigate
//       (['/payment/', JSON.stringify(myRental)]).then(() => window.location.reload());
//       this.toastrService.info('Ödeme sayfasına yönlendiriliyorsunuz...', 'Ödeme İşlemleri');
//     }
//   }

//   checkCarReturnDate(): boolean {
//     return !(!this.checkRentalDay()
//       || !this.checkDateDifference());
//   }

//   checkDateDifference(): boolean {
//     if (
//       this.rentDate.year > this.model.year
//       || this.rentDate.year == this.model.year && this.rentDate.month > this.model.month
//       || this.rentDate.year == this.model.year && this.rentDate.month == this.model.month
//       && this.rentDate.day > this.model.day) {
//       this.toastrService.error('Alış Tarihiniz Teslim Tarihinden Büyük Olamaz!');
//       return false;
//     }
//     return true;
//   }

//   calculatePrice() {
//     if (this.checkDateDifference()) {
//       var rentDate = new Date(this.rentDate.year, this.rentDate.month, this.rentDate.day);
//       var returnDate = new Date(this.model.year, this.model.month, this.model.day);
//       var timeDifference = Math.abs(returnDate.getTime() - rentDate.getTime());
//       var dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
//       this.totalPrice = dayDifference * this.cartItem.car.dailyPrice;
//     } else {
//       this.setTotalPriceValue();
//     }

//   }

  
//   checkRentalDay(): boolean {
//     if (this.rentDate.year == this.model.year && this.rentDate.month == this.model.month
//       && this.rentDate.day == this.model.day) {
//       this.toastrService.error('Alış Tarihi ve Teslim Tarihi Eşit Olamaz');
//       return false;
//     }
//     return true;
//   }

//   setTotalPriceValue() {
//     this.totalPrice = this.cartItem.carDetail.dailyPrice;
//   }

}
