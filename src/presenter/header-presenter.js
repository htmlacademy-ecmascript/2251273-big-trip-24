import FiltersView from '../view/filter-view/filters-view.js';

import TripInfoView from '../view/trip-info-view/trip-info-view.js';
import TripInfoMainView from '../view/trip-info-view/trip-info-main-view.js';
import TripInfoCostView from '../view/trip-info-view/trip-info-cost-view.js';

// import { render } from '../render.js';
import { render } from '../framework/render.js';

class HeaderPresenter {
  // информация о маршруте
  #TripInfoViewComponent = new TripInfoView();

  #tripInfoContainer = null;
  #filtersContainer = null;
  #tripEventsModel = null;
  #events = null;

  constructor(tripInfoContainer, filtersContainer, tripEventsModel) {
    this.#tripInfoContainer = tripInfoContainer;
    this.#filtersContainer = filtersContainer;
    this.#tripEventsModel = tripEventsModel;
  }

  init() {
    this.#events = [...this.#tripEventsModel.getEvents()];

    // отрисовка информации о маршруте
    render(new TripInfoMainView(this.#events),this.#TripInfoViewComponent.element);
    // отрисовка информации о стоимости
    render(new TripInfoCostView(this.#events), this.#TripInfoViewComponent.element);

    // отрисовка информации о маршруте
    render(this.#TripInfoViewComponent, this.#tripInfoContainer, 'AFTERBEGIN');

    // отрисовка фильтров
    render(new FiltersView(), this.#filtersContainer);
  }
}

export default HeaderPresenter;
