import * as React from 'react';

import * as colors from '../colors';
import ForecastChartContainer from './ForecastChart.container';
import InspectorContainer from './Inspector.container';
import RenderChartContainer from './RenderChart.container';
import TimelineFrameContainer from './timeline/TimelineFrame.container';

export default function ForecastComponent() {
  return (
    <div style={containerStyle}>
      <div style={topContainerStyle}>
        <div style={inspectorContainerStyle}>
          <InspectorContainer />
        </div>
        <div style={chartContainerStyle}>
          <ForecastChartContainer />
          <div style={renderChartContainerStyle}>
            <RenderChartContainer />
          </div>
        </div>
      </div>
      <div style={timelineFrameContainerStyle}>
        <TimelineFrameContainer />
      </div>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  background: colors.BLACK,
  color: colors.WHITE,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  scrollbarColor: `${colors.hexToRgba(colors.WHITE, 0.3)} ${colors.BLACK}`,
};

const topContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  overflow: 'hidden',
  position: 'relative',
};

const inspectorContainerStyle: React.CSSProperties = {
  position: 'relative',
  overflow: 'auto',
  width: '275px',
  zIndex: 5,
};

const chartContainerStyle: React.CSSProperties = {
  flexGrow: 1,
  position: 'relative',
  zIndex: 4,
};

const renderChartContainerStyle: React.CSSProperties = {
  left: 0,
  position: 'absolute',
  top: 0,
  zIndex: 12,
};

const timelineFrameContainerStyle: React.CSSProperties = {
  height: '30%',
  maxHeight: '500px',
  minHeight: '300px',
  overflow: 'auto',
};
