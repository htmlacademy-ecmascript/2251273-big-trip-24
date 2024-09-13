import SortView from '../view/sort-view/sort-view.js';
import TripEventsListView from '../view/trip-events-view/trip-events-list-view.js';
import TripEventsItemView from '../view/trip-events-view/trip-events-item-view.js';
import EditEventFormView from '../view/form-view/edit-event-form-view.js';
// import AddEventFormView from '../view/form-view/add-event-form-view.js';
import EmptyListView from '../view/empty-list-view/empty-list-view.js';

import { render, replace } from '../framework/render.js';

import {COUNT_TRIP_EVENTS} from '../constants.js';

import { tracksClickEscape } from '../utils.js';

class MainPresenter {
  // список событий
  #tripEventsListComponent = new TripEventsListView();
  #container = null;
  #tripEventsModel = null;
  #events = null;

  // конструктор
  constructor(container, tripEventsModel) {
    this.#container = container;
    this.#tripEventsModel = tripEventsModel;
  }

  init() {
    // список событий из конструктора
    this.#events = [...this.#tripEventsModel.getEvents()];

    // отрисовка сортировки
    render(new SortView(), this.#container);

    // отрисовка списка событий
    // добавление в компонет списка событий элемемта
    this.renderEvents();

    if (this.#events.length !== 0) {
      render(this.#tripEventsListComponent, this.#container);
    } else {
      render(new EmptyListView(), this.#container);
    }
  }

  renderEvents() {
    // отрисовка списка событий
    for (let i = 0; i < COUNT_TRIP_EVENTS; i++) {
      this.renderEvent(this.#events[i]);
    }
  }

  renderEvent(event) {

    const escKeyDownHandler = (evt) => {
      if (tracksClickEscape(evt)) {
        evt.preventDefault();
        replaceToEventComponent();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    // добавление в компонет списка событий элемемта
    const eventComponent = new TripEventsItemView(
      event, // точка маршрута
      () => {
        replaceToEventEditComponent();
        document.addEventListener('keydown', escKeyDownHandler);
      } // открытие формы редактирования
    );

    // добавление в компонет списка событий элемемта
    const eventEditComponent = new EditEventFormView(
      event, // точка маршрута
      () => {
        replaceToEventComponent();
        document.removeEventListener('keydown', escKeyDownHandler);
      }, // закрытие формы редактирования
      () => {
        replaceToEventComponent();
        document.removeEventListener('keydown', escKeyDownHandler);
      }, // отправка формы
    );


    function replaceToEventComponent() {
      replace(eventComponent, eventEditComponent);
    }

    function replaceToEventEditComponent() {
      replace(eventEditComponent, eventComponent);
    }


    render(eventComponent, this.#tripEventsListComponent.element);
  }
}

export default MainPresenter;
