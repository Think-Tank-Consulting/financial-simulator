import { Amount, Currency } from '../../amount';
import { CalendarDate } from '../../calendar-date';
import { Formula } from './formula';

/**
 * Cash received in regular intervals.
 */
export class MonthlySumFormula implements Formula {
  constructor(public readonly amount: Amount) {}

  public getCurrency(): Currency {
    return this.amount.currency;
  }

  public yieldsValueOnDay(days: number, startsOn: CalendarDate): number {
    const date = startsOn.addDays(days);

    if (startsOn.day < date.day) {
      return 0;
    }

    if (date.day < startsOn.day) {
      const isLastDay = date.addDays(1).month !== date.month;
      if (!isLastDay) {
        return 0;
      }
    }

    return this.amount.value;
  }
}
