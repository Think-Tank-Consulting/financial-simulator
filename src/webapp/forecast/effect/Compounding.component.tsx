import * as React from 'react';

import {
  CompoundingEffectFormula,
  CompoundingEffectFormulaJSON,
} from '../../../timeline';
import NumberComponent from '../../components/Number.component';
import FormElementComponent from '../../components/FormElement.component';
import { EffectFormulaProps } from './props';

export default function CompoundingComponent({
  compoundingFrequencyPerYear,
  nominalAnnualInterestRate,
  setFormula,
}: EffectFormulaProps & CompoundingEffectFormulaJSON) {
  const formulaProps = {
    compoundingFrequencyPerYear,
    nominalAnnualInterestRate,
  };

  return (
    <>
      <FormElementComponent title="Frequency per year">
        <NumberComponent
          min={0}
          setValue={value =>
            setFormula(
              CompoundingEffectFormula.fromJSON({
                ...formulaProps,
                compoundingFrequencyPerYear: value || null,
              }),
            )
          }
          step={1}
          value={compoundingFrequencyPerYear || 0}
        />
      </FormElementComponent>
      <FormElementComponent title="Annual interest rate">
        <NumberComponent
          setValue={value =>
            setFormula(
              CompoundingEffectFormula.fromJSON({
                ...formulaProps,
                nominalAnnualInterestRate: value,
              }),
            )
          }
          step={0.001}
          value={nominalAnnualInterestRate}
        />
      </FormElementComponent>
    </>
  );
}
