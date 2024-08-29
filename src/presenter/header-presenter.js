import FiltersView from '../view/filters-view';
import TripInfoView from '../view/trip-info-view';
import TripInfoMainView from '../view/trip-info-main-view';
import TripInfoCostView from '../view/trip-info-cost-view';

import { render } from '../render';

class HeaderPresenter {

  TripInfoViewComponent = new TripInfoView();

  constructor({tripInfoContainer, filtersContainer}) {
    this.tripInfoContainer = tripInfoContainer;
    this.filtersContainer = filtersContainer;
  }

  init() {

    // отрисовка информации о маршруте
    render(new TripInfoMainView(), this.TripInfoViewComponent.getElement());
    // отрисовка информации о стоимости
    render(new TripInfoCostView(), this.TripInfoViewComponent.getElement());
    // отрисовка информации о маршруте

    render(this.TripInfoViewComponent, this.tripInfoContainer, 'AFTERBEGIN');

    // отрисовка фильтров
    render(new FiltersView(), this.filtersContainer);
  }
}

export default HeaderPresenter;
