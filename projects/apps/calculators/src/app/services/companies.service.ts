import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Company } from '../interfaces/Company';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private companies$ = new BehaviorSubject([] as Array<Company>);

  getCompanies$(): Observable<Array<Company>> {
    return this.companies$.asObservable();
  }

  addCompany(company: Company) {
    const companies = this.companies$.getValue();
    const newCompanies = [
      ...companies,
      company,
    ];
    this.companies$.next(newCompanies);
  }
}
