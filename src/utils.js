import dayjs from 'dayjs';
import { HOURS, MINUTES } from './constants.js';

// функция возвращает случайный элемент массива
function getRandomArrayElement (array) {
  return array[Math.floor(Math.random() * array.length)];
}

// функция возвращает дату в нужном формате
function getFormettedEventDate(date, format) {
  return date ? dayjs(date).format(format) : '';
}

// функция возвращает разницу между датами
function getEventDurationTime(dateStart, dateEnd) {
  const diff = dayjs(dateEnd).diff(dateStart, 'minute');
  let days = Math.floor(diff / (MINUTES * HOURS));
  let hours = Math.floor(diff / MINUTES);
  let minutes = Math.floor(diff % MINUTES);
  days = days > 0 ? `${String(days).padStart(2, '0')}D` : '';
  hours =
    hours % HOURS === 0 ? '00H' : `${String(hours % HOURS).padStart(2, '0')}H`;
  minutes = `${String(minutes).padStart(2, '0')}M`;

  const durationTime = `${days} ${days !== '' || hours !== '' ? hours : ''} ${minutes}`;
  return durationTime;
}


// функция отслеживает нажатие Esc
function tracksClickEscape(evt) {
  return evt.key === 'Escape';
}

export {getRandomArrayElement, getFormettedEventDate, getEventDurationTime, tracksClickEscape};
