import { createElement } from '../../render.js';

function createTripInfoCost(point) {
  return `<p class="trip-info__cost">
            Total: &euro;&nbsp;<span class="trip-info__cost-value">${point}</span>
          </p>`;
}

class TripInfoCostView {
  constructor(event) {
    this.event = event;
  }

  getTemplate() {
    return createTripInfoCost(this.event);
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

export default TripInfoCostView;
