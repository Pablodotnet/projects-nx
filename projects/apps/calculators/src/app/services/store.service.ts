import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Company } from '../interfaces/Company';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private storedCompanies$ = new BehaviorSubject([] as Array<Company>);

  constructor() {
    this.initCheck();
  }

  initCheck(): void {
    const stored = localStorage.getItem('storedCompanies');
    if (!stored) {
      localStorage.setItem('storedCompanies', JSON.stringify([]));
    } else {
      try {
        this.storedCompanies$.next(JSON.parse(stored));
      } catch {
        this.storedCompanies$.next([]);
      }
      console.log('this.storedCompanies$', this.storedCompanies$);
    }
  }

  getStoredCompanies(): Observable<Company[]> {
    return this.storedCompanies$.asObservable();
  }

  addCompanyToStore(company: Company): void {
    const newArray = [
      ...this.storedCompanies$.value,
      company,
    ];
    localStorage.setItem('storedCompanies', JSON.stringify(newArray));
    this.storedCompanies$.next(newArray);
  }
}
