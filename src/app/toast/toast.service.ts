import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
  })

export class ToastMessage{
    constructor(private toastmessage :ToastrService) { } 

    showSuccess(message:any){
        this.toastmessage.success(message)
    }
    showError(message:any){
        this.toastmessage.error(message)
    }
    showWarning(message:any){
        this.toastmessage.warning(message)
    }
   
}