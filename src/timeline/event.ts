import { CalendarDate, CalendarDateJSON } from '../calendar-date';
import { stringFromJSON } from '../utils';
import { EventFormula, EventFormulaType } from './event/formula';
import { LumpSumFormula } from './event/lump-sum';
import { MonthlySumFormula } from './event/monthly-sum';
import { RecurringSumFormula } from './event/recurring-sum';

export type EventJSON = {
  endsOn: CalendarDateJSON | null;
  formula: any;
  formulaType: EventFormulaType;
  name: string;
  startsOn: CalendarDateJSON;
};

export class Event {
  public static fromJSON(value: EventJSON): Event {
    const formula = toFormula(value.formulaType, value.formula);
    const startsOn = CalendarDate.fromJSON(value.startsOn);
    const endsOn = value.endsOn ? CalendarDate.fromJSON(value.endsOn) : null;
    const name = stringFromJSON(value.name);
    return new Event(formula, startsOn, endsOn, name);
  }

  protected endsAfterDays = 0;

  constructor(
    public formula: EventFormula,
    protected startsOn: CalendarDate,
    protected endsOn: CalendarDate | null,
    protected name: string,
  ) {
    this.setEndsAfterDays();
  }

  public *yieldBalanceValues(
    startsOn: CalendarDate,
    days: number,
  ): Generator<number> {
    let balanceValue = 0;

    const daysLate = this.startsOn.daysBefore(startsOn);
    const daysToYield = Math.max(days, days + daysLate);

    for (let i = 0; daysLate < i; i--) {
      yield balanceValue;
    }

    for (let day = 0; day < daysToYield; day++) {
      balanceValue += this.yieldsValueOnDay(day);

      if (day >= daysLate) {
        yield balanceValue;
      }
    }
  }

  public getDateRange(): [CalendarDate, CalendarDate | null] {
    return [this.startsOn, this.endsOn];
  }

  public getEndsOn() {
    return this.endsOn;
  }

  public getName() {
    return this.name;
  }

  public getStartsOn() {
    return this.startsOn;
  }

  public setDateRange(startsOn: CalendarDate, endsOn: CalendarDate | null) {
    this.startsOn = startsOn;
    this.endsOn = endsOn;
    this.setEndsAfterDays();
  }

  public setEndsOn(endsOn: CalendarDate | null) {
    this.endsOn = endsOn;
    this.setEndsAfterDays();
  }

  protected setEndsAfterDays() {
    this.endsAfterDays = this.endsOn
      ? this.startsOn.daysBefore(this.endsOn)
      : Number.MAX_SAFE_INTEGER;
  }

  public setStartsOn(startsOn: CalendarDate) {
    this.startsOn = startsOn;
    this.setEndsAfterDays();
  }

  public toJSON(): EventJSON {
    return {
      endsOn: this.endsOn ? this.endsOn.toJSON() : null,
      formula: this.formula.toJSON(),
      formulaType: this.formula.getType(),
      name: this.name,
      startsOn: this.startsOn.toJSON(),
    };
  }

  public yieldsValueOnDay(day: number): number {
    if (day < 0) {
      return 0;
    }

    if (this.endsAfterDays < day) {
      return 0;
    }

    return this.formula.yieldsValueOnDay(day, this.startsOn);
  }
}

function toFormula(formulaType: EventFormulaType, formula: any): EventFormula {
  switch (formulaType) {
    case EventFormulaType.LumpSum:
      return LumpSumFormula.fromJSON(formula);
    case EventFormulaType.MonthlySum:
      return MonthlySumFormula.fromJSON(formula);
    case EventFormulaType.RecurringSum:
      return RecurringSumFormula.fromJSON(formula);
    default:
      throw new Error(
        `FormulaType "${formulaType}" hasn't been implemented yet`,
      );
  }
}
