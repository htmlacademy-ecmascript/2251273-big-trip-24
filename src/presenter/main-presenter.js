import SortView from '../view/sort-view';
import TripEventsListView from '../view/trip-events-list-view';
import TripEventsItemView from '../view/trip-events-item-view';
import EditEventFormView from '../view/edit-form-view';

import {render} from '../render';

const COUNT_TRIP_EVENTS = 3;

class MainPresenter {
  // список событий (компонент)
  tripEventsListComponent = new TripEventsListView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    // отрисовка сортировки
    render(new SortView(), this.container);

    // отрисовка списка событий
    // добавление в компонет списка событий элемемта
    render(this.tripEventsListComponent, this.container);

    // отрисовка формы редактирования
    // добавление в компонет списка событий элемемта
    render(new EditEventFormView(), this.tripEventsListComponent.getElement());


    for (let i = 0; i < COUNT_TRIP_EVENTS; i++) {
      render(new TripEventsItemView(), this.tripEventsListComponent.getElement());
    }
  }
}

export default MainPresenter;
