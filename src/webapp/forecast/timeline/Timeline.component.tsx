import * as React from 'react';

import * as actions from '../../redux/actions';
import { TRACK_PIXEL_HEIGHT } from './constants';
import SpanContainer from './Span.container';

type Props = {
  addTrack: typeof actions.forecast.addTrack;
  eventIds: string[];
  trackIds: string[];
};

export default function TimelineComponent({
  addTrack,
  eventIds,
  trackIds,
}: Props) {
  return (
    <div style={containerStyle}>
      <div style={headersContainerStyle}>
        {trackIds.map(trackId => (
          <div key={trackId} style={trackContainerStyle}>
            <div style={trackHeaderStyle}>TODO: Add name</div>
          </div>
        ))}
        <div>
          <button onClick={() => addTrack('Untitled track')}>
            + Add track
          </button>
        </div>
      </div>
      <div style={tracksContainerStyle}>
        {trackIds.map((_, i) => (
          <div key={i} style={trackContainerStyle}>
            <div style={trackBodyStyle} />
          </div>
        ))}
        <div style={spansContainerStyle}>
          {eventIds.map(eventId => (
            <SpanContainer eventId={eventId} />
          ))}
        </div>
      </div>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  overflowX: 'hidden',
  overflowY: 'auto',
};

const headersContainerStyle: React.CSSProperties = {
  width: '275px',
};

const tracksContainerStyle: React.CSSProperties = {
  flexGrow: 1,
  overflow: 'hidden',
  position: 'relative',
  zIndex: 5,
};

const trackContainerStyle: React.CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  height: `${TRACK_PIXEL_HEIGHT}px`,
};

const trackHeaderStyle: React.CSSProperties = {
  width: '200px',
};

const trackBodyStyle: React.CSSProperties = {
  height: '100%',
  position: 'relative',
  width: '100%',
};

const spansContainerStyle: React.CSSProperties = {
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
};

const spanContainerStyle: React.CSSProperties = {
  height: `${TRACK_PIXEL_HEIGHT}px`,
  left: 0,
  position: 'absolute',
  width: '100%',
};
