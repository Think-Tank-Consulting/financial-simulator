import { CalendarDate } from '../../../calendar-date';
import { Account, Effect, Event } from '../../../timeline';
import { ChartSampleSize, Track, TrackItem } from '../reducer/forecast/props';
import * as types from '../types';

export function addAccount(account: Account): types.forecast.AddAccount {
  return { account: account.toJSON(), type: types.forecast.ADD_ACCOUNT };
}

export function addEffect(
  accountId: string,
  effect: Effect,
): types.forecast.AddEffect {
  return {
    accountId,
    effect: effect.toJSON(),
    type: types.forecast.ADD_EFFECT,
  };
}

export function addEvent(event: Event): types.forecast.AddEvent {
  return { event: event.toJSON(), type: types.forecast.ADD_EVENT };
}

export function addTrack(
  accountId: string,
  track: Track,
): types.forecast.AddTrack {
  return { accountId, track, type: types.forecast.ADD_TRACK };
}

export function exportTimeline(): types.forecast.ExportTimeline {
  return { type: types.forecast.EXPORT_TIMELINE };
}

export function importTimeline(
  data: types.forecast.ImportTimelineData,
): types.forecast.ImportTimeline {
  return { data, type: types.forecast.IMPORT_TIMELINE };
}

export function removeEffect(effectId: string): types.forecast.RemoveEffect {
  return { effectId, type: types.forecast.REMOVE_EFFECT };
}

export function removeEffectFromAccount(
  effectId: string,
  accountId: string,
): types.forecast.RemoveEffectFromAccount {
  return {
    accountId,
    effectId,
    type: types.forecast.REMOVE_EFFECT_FROM_ACCOUNT,
  };
}

export function removeEvent(id: string): types.forecast.RemoveEvent {
  return { id, type: types.forecast.REMOVE_EVENT };
}

export function selectAccount(
  accountId: string | null,
): types.forecast.SelectAccount {
  return { accountId, type: types.forecast.SELECT_ACCOUNT };
}

export function selectTrackItem(
  trackItem: TrackItem | null,
): types.forecast.SelectTrackItem {
  return { trackItem, type: types.forecast.SELECT_TRACK_ITEM };
}

export function setEffect(effect: Effect): types.forecast.SetEffect {
  return { effect: effect.toJSON(), type: types.forecast.SET_EFFECT };
}

export function setEvent(event: Event): types.forecast.SetEvent {
  return { event: event.toJSON(), type: types.forecast.SET_EVENT };
}

export function setEventAccountIds(
  eventId: string,
  fromAccountId: string | null,
  toAccountId: string | null,
): types.forecast.SetEventAccountIds {
  return {
    eventId,
    fromAccountId,
    toAccountId,
    type: types.forecast.SET_EVENT_ACCOUNT_IDS,
  };
}

export function setTimelineCalendarDates(
  startsOn: CalendarDate,
  endsOn: CalendarDate,
): types.forecast.SetTimelineCalendarDates {
  return {
    endsOn: endsOn.toJSON(),
    startsOn: startsOn.toJSON(),
    type: types.forecast.SET_TIMELINE_CALENDAR_DATES,
  };
}

export function setTimelineChartSampleSize(
  chartSampleSize: ChartSampleSize,
): types.forecast.SetTimelineChartSampleSize {
  return {
    chartSampleSize,
    type: types.forecast.SET_TIMELINE_CHART_SAMPLE_SIZE,
  };
}

export function setTrackItemCalendarDates(
  accountId: string,
  trackItem: TrackItem,
  trackIndex: number,
  startsOn: CalendarDate | null,
  endsOn: CalendarDate | null,
): types.forecast.SetTrackItemCalendarDates {
  return {
    accountId,
    endsOn: endsOn ? endsOn.toJSON() : null,
    startsOn: startsOn ? startsOn.toJSON() : null,
    trackIndex,
    trackItem,
    type: types.forecast.SET_TRACK_ITEM_CALENDAR_DATES,
  };
}

export function setTrackItemEndsOn(
  accountId: string,
  trackItem: TrackItem,
  endsOn: CalendarDate | null,
): types.forecast.SetTrackItemEndsOn {
  return {
    accountId,
    endsOn: endsOn ? endsOn.toJSON() : null,
    trackItem,
    type: types.forecast.SET_TRACK_ITEM_ENDS_ON,
  };
}

export function setTrackItemStartsOn(
  accountId: string,
  trackItem: TrackItem,
  startsOn: CalendarDate | null,
): types.forecast.SetTrackItemStartsOn {
  return {
    accountId,
    trackItem,
    startsOn: startsOn ? startsOn.toJSON() : null,
    type: types.forecast.SET_TRACK_ITEM_STARTS_ON,
  };
}

export function setTrack(track: Track): types.forecast.SetTrack {
  return { track, type: types.forecast.SET_TRACK };
}
