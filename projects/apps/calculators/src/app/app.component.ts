import { Component } from '@angular/core';
import { ModalService } from 'carbon-components-angular';
import { Observable } from 'rxjs';
import { AddCompanyModalComponent } from './components/add-company-modal/add-company-modal.component';
import { Company } from './interfaces/Company';
import { CompaniesService } from './services/companies.service';
import { StoreService } from './services/store.service';

@Component({
  selector: 'projects-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'payments';

  companies$: Observable<Company[]>;
  savedCompanies$: Observable<Company[]>;

  constructor(
    private companiesService: CompaniesService,
    private modalService: ModalService,
    private storeService: StoreService,
  ) {
    this.companies$ = this.companiesService.getCompanies$();
    this.savedCompanies$ = this.storeService.getStoredCompanies();
  }

  handleOpenAddModal(): void {
    this.modalService.create({
      component: AddCompanyModalComponent
    });
  }

  handleAddSavedCompany(company: Company): void {
    this.companiesService.addCompany(company);
  }
}
