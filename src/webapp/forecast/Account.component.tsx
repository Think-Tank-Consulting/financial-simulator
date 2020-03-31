import classnames from 'classnames';
import * as React from 'react';

import { EffectFormulaType, EventFormulaType } from '../../timeline';
import FormElementComponent from '../components/FormElement.component';
import StringComponent from '../components/String.component';
import * as actions from '../redux/actions';
import { newEffect } from './effect/utils';
import { newEvent } from './event/utils';
import styles from './Inspector.css';

type Props = {
  accountId: string;
  addEffect: typeof actions.forecast.addEffect;
  addEvent: typeof actions.forecast.addEvent;
  name: string;
  setAccountName: typeof actions.forecast.setAccountName;
};

export default function AccountComponent({
  accountId,
  addEffect,
  addEvent,
  name,
  setAccountName,
}: Props) {
  return (
    <div className={styles.content}>
      <table>
        <tbody>
          <FormElementComponent title="Name">
            <StringComponent
              setValue={value => {
                setAccountName(accountId, value);
              }}
              value={name}
            />
          </FormElementComponent>
        </tbody>
      </table>
      <button
        className={classnames(
          styles['wide-button'],
          styles['wide-button-EFFECT'],
        )}
        onClick={() =>
          addEffect(accountId, newEffect(EffectFormulaType.Compounding))
        }
      >
        + Add Compounding Interest
      </button>
      <button
        className={classnames(
          styles['wide-button'],
          styles['wide-button-EVENT-IN'],
        )}
        onClick={() =>
          addEvent(newEvent(accountId, EventFormulaType.MonthlySum, true))
        }
      >
        + Add Income
      </button>
      <button
        className={classnames(
          styles['wide-button'],
          styles['wide-button-EVENT-OUT'],
        )}
        onClick={() =>
          addEvent(newEvent(accountId, EventFormulaType.MonthlySum, false))
        }
      >
        + Add Expense
      </button>
    </div>
  );
}
