import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addtoCart(carDetail:CarDetail){
    let item = CartItems.find(c=>c.carDetail.carId==carDetail.carId);
    if(item){
      let cartItem = new CartItem();
      cartItem.carDetail= carDetail;
      cartItem.quantity=1;
      CartItems.push(cartItem)
    }
    
  }
  list():CartItem[]{
    return CartItems;
  }
}
