import { isBeforeDay, isSameDay, isAfterDay} from './utils.js';

// Константы
const COUNT_TRIP_EVENTS = Math.floor(Math.random() * 10);


const EVENT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
];


const EVENT_SORT = [
  'day',
  'event',
  'time',
  'price',
  'offer'
];


const EVENT_FILTER = [
  {
    name: 'everything',
    status: (data) => data.length > 0,
  },
  {
    name: 'future',
    status: (data) => data.some((point) => !isBeforeDay(point.event.dateFrom)),
  },
  {
    name: 'present',
    status: (data) => data.some((point) =>
      isAfterDay(point.event.dateFrom) || isSameDay(point.event.dateFrom) &&
      isAfterDay(point.event.dateTo) || isSameDay(point.event.dateTo)
    ),
  },
  {
    name: 'past',
    status: (data) => data.some((point) => !isAfterDay(point.event.dateTo)),
  }
];


const DATE_FORMAT = {
  EVENT_TIME_FORMAT: 'HH:mm',
  EVENT_DATE_FORMAT: 'MMM DD',
  EVENT_DATE_ATTRIBUTE_FORMAT: 'YYYY-MM-DD',
  EVENT_DATETIME_ATTRIBUTE_FORMAT: 'YYYY-MM-DDTHH:mm',
  MAIN_EVENT_DATE_START_FORMAT: 'DD',
  MAIN_EVENT_DATE_END_FORMAT: 'DD MMM',
  INPUT_DATE_FORMAT: 'DD/MM/YY HH:mm',
};


const HOURS = 24;
const MINUTES = 60;


export {COUNT_TRIP_EVENTS, DATE_FORMAT, HOURS, MINUTES, EVENT_TYPES, EVENT_SORT, EVENT_FILTER};
