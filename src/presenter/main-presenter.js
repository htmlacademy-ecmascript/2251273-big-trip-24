import SortView from '../view/sort-view/sort-view.js';
import TripEventsListView from '../view/trip-events-view/trip-events-list-view.js';
// import AddEventFormView from '../view/form-view/add-event-form-view.js';
import EmptyListView from '../view/empty-list-view/empty-list-view.js';

import EventPresenter from '../presenter/event-presenter.js';

import { render } from '../framework/render.js';

import { COUNT_TRIP_EVENTS } from '../constants.js';

import { updateItem } from '../utils.js';


class MainPresenter {
  #tripEventsListComponent = new TripEventsListView();
  #container = null;
  #tripEventsModel = null;
  #events = null;

  #eventPresenters = new Map();

  constructor(container, tripEventsModel) {
    this.#container = container;
    this.#tripEventsModel = tripEventsModel;
  }

  init() {
    // список событий из конструктора
    this.#events = [...this.#tripEventsModel.getEvents()];

    // отрисовка сортировки
    render(new SortView(), this.#container);

    if (this.#events.length !== 0) {
      render(this.#tripEventsListComponent, this.#container);

      for (let i = 0; i < COUNT_TRIP_EVENTS; i++) {
        this.#renderEvent(this.#events[i]);
      }

    } else {
      render(new EmptyListView(), this.#container);
    }
  }

  #handleTripEventChange = (updatedEvent) => {
    // this.#events = updateItem(this.#events, updatedEvent);
    this.#eventPresenters = updateItem(this.#events, updatedEvent);
    this.#eventPresenters.get(updatedEvent.id).init(updatedEvent);
    // console.log(this.#eventPresenters.get(updatedEvent.id));
    // console.log(this.#eventPresenters);
    // this.#eventPresenters.get(updatedEvent.id);
  };

  #renderEvent(event) {
    const eventPresenter = new EventPresenter(
      this.#tripEventsListComponent.element,
      this.#handleTripEventChange
    );

    // eventPresenter.init(event);

    this.#eventPresenters.set(event.id, event);
    eventPresenter.init(this.#eventPresenters.get(event.id, event));
  }

}

export default MainPresenter;
