import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Coupon } from 'src/app/Modules/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getOrdersByUser(userId: number): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(`${this.apiUrl}/user/${userId}`);
  }

  applyCoupon(
    userId: number,
    orderId: number,
    couponCode: string
  ): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/${userId}/coupon`,
      {},
      {
        params: {
          orderId: orderId.toString(),
          couponCode: couponCode,
        },
      }
    );
  }}
