import AbstractView from '../../framework/view/abstract-view.js';

function createTripInfoCost(fullCost) {
  return `<p class="trip-info__cost">
            Total: &euro;&nbsp;<span class="trip-info__cost-value">${fullCost}</span>
          </p>`;
}

class TripInfoCostView extends AbstractView {
  #event;
  constructor(event) {
    super();
    this.#event = event;
  }

  get template() {
    return createTripInfoCost(this.getFullCost());
  }

  getFullCost() {
    return this.#event.reduce((acc, item) => acc + item.event.basePrice, 0);
  }
}

export default TripInfoCostView;
