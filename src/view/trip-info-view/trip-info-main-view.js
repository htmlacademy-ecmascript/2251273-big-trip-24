import AbstractView from '../../framework/view/abstract-view.js';

import { getFormettedEventDate } from '../../utils.js';

import { DATE_FORMAT } from '../../constants.js';

function createTripInfoMain(tripInfoTitle, tripInfoDates) {
  return `<div class="trip-info__main">
            <h1 class="trip-info__title">${tripInfoTitle}</h1>
            <p class="trip-info__dates">${tripInfoDates}</p>
          </div>`;
}

class TripInfoMainView extends AbstractView {
  #event;
  constructor(event) {
    super();
    this.#event = event;
  }

  get template() {
    return createTripInfoMain(this.#tripInfoTitle, this.#tripInfoDates);
  }

  // отображение точек маршрута
  get #tripInfoTitle() {
    switch (this.#event.length) {
      case 0:
        return '';
      case 1:
        return this.#event[0].city.name;
      case 2:
        return `${this.#event[0].city.name} &mdash; ${this.#event[1].city.name}`;
      case 3:
        return `${this.#event[0].city.name} &mdash; ${this.#event[1].city.name} &mdash; ${this.#event[2].city.name}`;
      default:
        if (this.#event.length > 3) {
          return `${this.#event[0].city.name} &mdash; ... &mdash; ${this.#event.at(-1).city.name}`;
        } else {
          throw new Error('Invalid event length');
        }
    }
  }

  // отображение дат маршрута
  get #tripInfoDates() {
    return `${getFormettedEventDate(this.#event[0].event.dateFrom, DATE_FORMAT.EVENT_DATE_FORMAT)}&nbsp;&mdash;&nbsp;${getFormettedEventDate(this.#event.at(-1).event.dateTo, DATE_FORMAT.EVENT_DATE_FORMAT)}`;
  }

}

export default TripInfoMainView;
