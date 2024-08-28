import SortView from '../view/sort-view';
import TripEventsListView from '../view/trip-events-list-view';
import TripEventsItemView from '../view/trip-events-item-view';

import {render} from '../render';

const COUNT_TRIP_EVENTS = 3;

class MainPresenter {

  tripEventsListComponent = new TripEventsListView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    // отрисовка сортировки
    render(new SortView(), this.container);

    // отрисовка списка событий
    render(this.tripEventsListComponent, this.container);
    for (let i = 0; i < COUNT_TRIP_EVENTS; i++) {
      render(new TripEventsItemView(), this.tripEventsListComponent.getElement());
    }
  }
}

export default MainPresenter;
