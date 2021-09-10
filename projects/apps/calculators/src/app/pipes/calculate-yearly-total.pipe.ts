import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateYearlyTotal'
})
export class CalculateYearlyTotalPipe implements PipeTransform {

  transform(yearlyTotals: unknown): number {
    if (yearlyTotals) {
      const {
        netSalary,
        savingFund,
        anualBonus,
        homeOfficeBonus,
        cellphoneBonus,
        foodCouponsBonus,
        vacationBonus,
        christmasBonus,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }: any = yearlyTotals;
      const totals = {
        netSalary,
        savingFund,
        anualBonus,
        homeOfficeBonus,
        cellphoneBonus,
        foodCouponsBonus,
        vacationBonus,
        christmasBonus,
      };
      return Object.values(totals).reduce((a, b) => a + b)
    }
    return 0;
  }

}
