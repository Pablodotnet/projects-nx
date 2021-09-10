export interface Company {
    name: string;
    grossSalary: string;
    taxesPercentage: string;
    savingFundPercentage: string;
    anualBonusPercentage: string;
    homeOfficeBonus: string;
    cellphoneBonus: string;
    foodCoupons: string;
    vacationDays: string;
    vacationBonusPercentage: string;
    christmasBonusDays: string;
    yearlyTotals?: {
        grossSalary: number;
        netSalary: number;
        savingFund: number;
        anualBonus: number;
        homeOfficeBonus: number;
        cellphoneBonus: number;
        foodCouponsBonus: number;
        vacationBonus: number;
        christmasBonus: number;
    };
};
