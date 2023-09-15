import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from "src/app/shared/payment-detail.service";
import { PaymentDetail } from '../shared/payment-detail.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  paymentDetail: PaymentDetail = new PaymentDetail();
  listData: PaymentDetail[];
  
  selecttedPayment?: PaymentDetail;
  constructor(public paymentDetailservice: PaymentDetailService,
    private router:Router) {}


  ngOnInit(): void {
    this.getPaymentDetail();

  }
  private getPaymentDetail(){
    this.paymentDetailservice.getPaymentDetailList().subscribe(data => {
      this.listData = data;
    });
  }

  onSelectData(pd : PaymentDetail){
    console.log(pd)
    this.paymentDetail = pd
  }

  onUpdate(){
    this.paymentDetailservice.updatePayMentDetail(this.paymentDetail.paymentDetailId, this.paymentDetail)
    .subscribe( data =>{
      console.log('ok')
      this.getPaymentDetail();
      window.location.reload();
    })
  }
  onDelete(id:number){
    console.log('ok')
    this.paymentDetailservice.deletePayMentDetail(id).subscribe();
    window.location.reload();
  }
}