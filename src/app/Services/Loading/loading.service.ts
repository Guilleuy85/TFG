import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading = new BehaviorSubject<boolean>(false);

  public getLoading(): Observable<boolean>{
    return this.loading.asObservable();
  }

  public setLoading(value:boolean):void{
    this.loading.next(value);
  }

  constructor() { }
}
