import AbstractView from '../../framework/view/abstract-view.js';

function createTripEventsList() {
  return `<ul class="trip-events__list">
          </ul>`;
}

class TripEventsListView extends AbstractView {
  get template() {
    return createTripEventsList();
  }
}

export default TripEventsListView;
