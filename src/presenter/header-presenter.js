import FiltersView from '../view/filter-view/filters-view.js';

import TripInfoView from '../view/trip-info-view/trip-info-view.js';
import TripInfoMainView from '../view/trip-info-view/trip-info-main-view.js';
import TripInfoCostView from '../view/trip-info-view/trip-info-cost-view.js';

import { render } from '../render.js';

class HeaderPresenter {
  // информация о маршруте
  TripInfoViewComponent = new TripInfoView();

  constructor(tripInfoContainer, filtersContainer, tripEventsModel) {
    this.tripInfoContainer = tripInfoContainer;
    this.filtersContainer = filtersContainer;
    this.tripEventsModel = tripEventsModel;
  }

  init() {
    this.events = [...this.tripEventsModel.getEvents()];
    // console.log(this.events);

    // отрисовка информации о маршруте
    render(new TripInfoMainView(this.events), this.TripInfoViewComponent.getElement());
    // отрисовка информации о стоимости
    render(new TripInfoCostView(), this.TripInfoViewComponent.getElement());

    // отрисовка информации о маршруте
    render(this.TripInfoViewComponent, this.tripInfoContainer, 'AFTERBEGIN');

    // отрисовка фильтров
    render(new FiltersView(), this.filtersContainer);
  }
}

export default HeaderPresenter;
