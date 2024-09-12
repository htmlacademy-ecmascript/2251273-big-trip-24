import AbstractView from '../../framework/view/abstract-view.js';

import { getFormettedEventDate } from '../../utils.js';
import { DATE_FORMAT, EVENT_TYPES } from '../../constants.js';

function createEditEventForm(point) {
  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${point.event.type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${EVENT_TYPES.map((type) => `<div class="event__type-item">
                          <input id="event-type-${type.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type.toLowerCase()}" ${point.event.type === type.toLowerCase() ? 'checked' : ''}>
                          <label class="event__type-label  event__type-label--${type.toLowerCase()}" for="event-type-${type.toLowerCase()}-1">${type}</label>
                        </div>`).join('')}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${point.event.type}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${point.city.name}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${getFormettedEventDate(point.event.dateFrom, DATE_FORMAT.INPUT_DATE_FORMAT)}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${getFormettedEventDate(point.event.dateTo, DATE_FORMAT.INPUT_DATE_FORMAT)}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${point.costEvent}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    <div class="event__available-offers">

                      ${point.offers.all.map((offer) => `
                      <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.title.split(' ').at(-1)}-${1}" type="checkbox" name="event-offer-${offer.title.split(' ').at(-1)}" ${point.event.offers.includes(offer.id) ? 'checked' : ''}>
                        <label class="event__offer-label" for="event-offer-${offer.title.split(' ').at(-1)}-${1}">
                          <span class="event__offer-title">${offer.title}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${offer.price}</span>
                        </label>
                      </div>`)}

                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${point.city.description}</p>
                  </section>
                </section>
              </form>
            </li>`;
}

class EditEventForm extends AbstractView {
  #event;
  constructor(event, closeEditEventForm, onFormSubmit) {
    super();
    this.#event = event;
    this.#closeEditEventForm = closeEditEventForm;
    this.#onFormSubmit = onFormSubmit;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#closeEditEventForm);

    this.element.querySelector('.event--edit').addEventListener('submit', this.#onFormSubmit);
  }

  get template() {
    return createEditEventForm(this.#event);
  }

  // закрытие формы
  #closeEditEventForm = (evt) => {
    evt.preventDefault();
  };

  // отправка формы
  #onFormSubmit = (evt) => {
    evt.preventDefault();
  };
}

export default EditEventForm;
