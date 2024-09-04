import SortView from '../view/sort-view/sort-view.js';
import TripEventsListView from '../view/trip-events-view/trip-events-list-view.js';
import TripEventsItemView from '../view/trip-events-view/trip-events-item-view.js';
import EditEventFormView from '../view/form-view/edit-event-form-view.js';
import AddEventFormView from '../view/form-view/add-event-form-view.js';

import {render} from '../render.js';

import {COUNT_TRIP_EVENTS} from '../constants.js';

class MainPresenter {
  // список событий
  tripEventsListComponent = new TripEventsListView();

  // конструктор
  constructor(container, tripEventsModel) {
    this.container = container;
    this.tripEventsModel = tripEventsModel;
  }

  init() {
    // список событий из конструктора
    this.events = [...this.tripEventsModel.getEvents()];

    // отрисовка сортировки
    render(new SortView(), this.container);

    // отрисовка списка событий
    // добавление в компонет списка событий элемемта
    render(this.tripEventsListComponent, this.container);

    // отрисовка формы редактирования
    // добавление в компонет списка событий элемемта
    render(new AddEventFormView(), this.tripEventsListComponent.getElement());
    render(new EditEventFormView(), this.tripEventsListComponent.getElement());

    // отрисовка списка событий
    for (let i = 0; i < COUNT_TRIP_EVENTS; i++) {

      // добавление в компонет списка событий элемемта
      render(new TripEventsItemView(this.events[i]), this.tripEventsListComponent.getElement());
    }
  }
}

export default MainPresenter;
