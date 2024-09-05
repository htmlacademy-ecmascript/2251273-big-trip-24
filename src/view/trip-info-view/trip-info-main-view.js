import { createElement } from '../../render.js';
import { getFormettedEventDate } from '../../utils.js';

import { DATE_FORMAT } from '../../constants.js';

function createTripInfoMain(firstPoint, averagePoint, lastPoint) {
  return `<div class="trip-info__main">
            <h1 class="trip-info__title">${firstPoint.city.name} &mdash; ${averagePoint.city.name} &mdash; ${lastPoint.city.name}</h1>

            <p class="trip-info__dates">${getFormettedEventDate(firstPoint.event.dateFrom, DATE_FORMAT.MAIN_EVENT_DATE_END_FORMAT)}&nbsp;&mdash;&nbsp;${getFormettedEventDate(firstPoint.event.dateTo, DATE_FORMAT .MAIN_EVENT_DATE_END_FORMAT)}</p>
          </div>`;
}

class TripInfoMainView {
  constructor(event) {
    this.event = event;
  }

  getFirstPoint() {
    return this.event[0];
  }

  getLastPoint() {
    return this.event[this.event.length - 1];
  }

  getAveragePoint() {
    return this.event[Math.floor(this.event.length / 2)];
  }

  getTemplate() {
    return createTripInfoMain(this.getFirstPoint(), this.getAveragePoint(), this.getLastPoint());
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

export default TripInfoMainView;
