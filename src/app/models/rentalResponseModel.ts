import { Rental } from "./rental";
import { ResponseModel } from "./responseModel";

export interface RentalResponseModeL extends ResponseModel{
    data:Rental[]
}