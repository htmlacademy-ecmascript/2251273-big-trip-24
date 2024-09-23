import AbstractView from '../../framework/view/abstract-view.js';
import { getFormettedEventDate, getEventDurationTime } from '../../utils.js';
import { DATE_FORMAT } from '../../constants.js';

function createTripEventsList(point) {
  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${point.event.dateFrom}">${getFormettedEventDate(point.event.dateFrom, DATE_FORMAT.EVENT_DATE_FORMAT)}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${point.event.type}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${point.event.type} ${point.city.name}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${point.event.dateFrom}">${getFormettedEventDate(point.event.dateFrom, DATE_FORMAT.EVENT_TIME_FORMAT)}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${point.event.dateTo}">${getFormettedEventDate(point.event.dateTo, DATE_FORMAT.EVENT_TIME_FORMAT)}</time>
                  </p>
                  <p class="event__duration">${getEventDurationTime(point.event.dateFrom, point.event.dateTo)}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${point.costEvent}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${point.offers.selected.map((offer) => `<li class="event__offer")>
                    <span class="event__offer-title">${offer.title}</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${offer.price}</span>
                    </li>`).join('')}
                </ul>
                <button class="event__favorite-btn ${point.event.isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
}

class TripEventsItemView extends AbstractView {
  #point;
  #editEventFormHandler;
  #favoriteClickHandler;

  constructor(point, onEditFormClick, onFavoriteClick) {
    super();
    this.#point = point;
    this.#editEventFormHandler = onEditFormClick;
    this.#favoriteClickHandler = onFavoriteClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#openEditEventForm);

    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClick);
  }

  get template() {
    return createTripEventsList(this.#point);
  }

  //
  #openEditEventForm = (evt) => {
    evt.preventDefault();
    this.#editEventFormHandler();
  };

  //
  #favoriteClick = () => {
    this.#favoriteClickHandler();
  };

  #test() {
    console.log(this.#point);

  }
}

export default TripEventsItemView;
