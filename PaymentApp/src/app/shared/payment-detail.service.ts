import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model'
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  private baseURL = 'http://localhost:19010/api/PaymentDetail'
  constructor(private httpClient:HttpClient) {}

  getPaymentDetailList(): Observable<PaymentDetail[]>{
    return this.httpClient.get<PaymentDetail[]>(`${this.baseURL}`);
  }
  
  createPayMentDetail(paymentdetail: PaymentDetail): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, paymentdetail);
  }
  
  getPayMentDetailById(id: number): Observable<PaymentDetail>{
    return this.httpClient.get<PaymentDetail>(`${this.baseURL}/${id}`);
  }

  updatePayMentDetail(id: number, paymentdetail: PaymentDetail): Observable<Object>{
    console.log(paymentdetail)
    return this.httpClient.put(`${this.baseURL}/${paymentdetail.paymentDetailId}`, paymentdetail);
  }

  deletePayMentDetail(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
