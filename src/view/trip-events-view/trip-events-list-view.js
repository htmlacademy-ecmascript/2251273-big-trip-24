import { createElement } from '../../render.js';

function createTripEventsList() {
  return `<ul class="trip-events__list">
          </ul>`;
}

class TripEventsListView {
  getTemplate() {
    return createTripEventsList();
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

export default TripEventsListView;
