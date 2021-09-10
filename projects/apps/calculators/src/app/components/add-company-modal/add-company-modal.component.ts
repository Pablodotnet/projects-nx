import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseModal } from 'carbon-components-angular';
import { Company } from '../../interfaces/Company';
import { CompaniesService } from '../../services/companies.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'projects-calculators-add-company-modal',
  templateUrl: './add-company-modal.component.html',
  styleUrls: ['./add-company-modal.component.scss']
})
export class AddCompanyModalComponent extends BaseModal {

  companyForm: FormGroup;
  isSaving = false;

  constructor(
    private companiesService: CompaniesService,
    private storeService: StoreService,
  ) {
    super();

    this.companyForm  = new FormGroup({
      name: new FormControl('', Validators.required),
      grossSalary: new FormControl('', Validators.required),
      taxesPercentage: new FormControl('', Validators.required),
      savingFundPercentage: new FormControl(''),
      anualBonusPercentage: new FormControl(''),
      homeOfficeBonus: new FormControl(''),
      cellphoneBonus: new FormControl(''),
      foodCoupons: new FormControl(''),
      vacationDays: new FormControl(''),
      vacationBonusPercentage: new FormControl(''),
      christmasBonusDays: new FormControl(''),
    });
  }

  handleSaveCompany(): void {
    this.isSaving = true;
    setTimeout(() => {
      const newCompany = this.companyForm.value;
      const yearlyTotals = this.calculateYearlyTotals(newCompany);
      const companyPayload = {
        ...newCompany,
        yearlyTotals,
      };
      this.storeService.addCompanyToStore(companyPayload);
      this.companiesService.addCompany(companyPayload);
      this.isSaving = false;
      this.closeModal();
    }, 1000);
  }

  private calculateYearlyTotals(company: Company) {
    return {
      grossSalary: (+company.grossSalary * 12),
      netSalary: ((+company.grossSalary - (+company.grossSalary * (+company.taxesPercentage / 100))) * 12),
      savingFund: (((+company.grossSalary * (+company.savingFundPercentage / 100)) * 2) * 12),
      anualBonus: ((+company.grossSalary * 12) * (+company.anualBonusPercentage / 100)),
      homeOfficeBonus: (+company.homeOfficeBonus * 12),
      cellphoneBonus: (+company.cellphoneBonus * 12),
      foodCouponsBonus: (+company.foodCoupons * 12),
      vacationBonus: (((+company.grossSalary / 30) * +company.vacationDays) * (+company.vacationBonusPercentage / 100)),
      christmasBonus: ((+company.grossSalary / 30) * +company.christmasBonusDays),
    };
  }

}
