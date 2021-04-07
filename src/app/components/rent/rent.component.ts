import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { CartItem } from 'src/app/models/cartItem';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  cartItems:CartItem[];
  carDetails: CarDetail[]; 
  constructor(private toastrService:ToastrService,private carService:CarService,
    private rentalService:RentalService,private cartService:CartService) { }

  ngOnInit(): void {
  }
  addtoCard(cartItem:CartItem){
    if(cartItem.quantity==1){
      this.toastrService.error("Hata","Bu Aracı Kiralayamazsınız")
    }
    else{
      this.toastrService.success("Araç Kiralandı",cartItem.carDetail.carName)
      this.cartService.addtoCart(cartItem.carDetail)
    }
      
  }

}
