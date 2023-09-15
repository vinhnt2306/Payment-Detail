import { Component, Input, OnInit } from "@angular/core";
import { PaymentDetail } from "src/app/shared/payment-detail.model";
import { PaymentDetailService } from "src/app/shared/payment-detail.service";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector : 'app-payment-detail-form',
  templateUrl:'./payment-detail-form.component.html',
  styles: [ ]
})
export class PaymentDetailFormComponent implements OnInit {

  @Input()
  paymentdetail: PaymentDetail = new PaymentDetail();

  constructor(public paymentdetailService:PaymentDetailService,
    private router: Router) { }

  ngOnInit(): void {
    
  }
  
  savePaymentDetail(){
    this.paymentdetailService.createPayMentDetail(this.paymentdetail).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }
  onSubmit(){
    this.savePaymentDetail();
    window.location.reload();
  }
}
