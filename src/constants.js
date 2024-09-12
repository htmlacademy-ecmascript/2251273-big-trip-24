// Константы
const COUNT_TRIP_EVENTS = 5;


const EVENT_TYPES = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant',
];


const EVENT_SORT = [
  'day',
  'event',
  'time',
  'price',
  'offer'
];


const EVENT_FILTER = [
  'everything',
  'future',
  'present',
  'past'
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
