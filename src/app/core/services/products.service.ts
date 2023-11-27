import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../models/models';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private productsUrl = 'http://localhost:3000/products';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productsUrl).pipe(
            map((data) => data),
            catchError((error) => this.handleError(error))
        );
    }

    private handleError(error: any): Observable<never> {
        console.error('An error occurred', error);
        return throwError(error.message || error);
    }
}
