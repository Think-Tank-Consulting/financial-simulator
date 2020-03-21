import { connect } from 'react-redux';

import { State } from '../redux/reducer';
import HistoricalChartComponent from './HistoricalChart.component';

const mapState = (state: State) => {
  return {
    accounts: state.accounts.items,
  };
};

export default connect(mapState)(HistoricalChartComponent);
