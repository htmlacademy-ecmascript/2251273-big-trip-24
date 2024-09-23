import AbstractView from '../../framework/view/abstract-view.js';

import { EVENT_FILTER } from '../../constants.js';

function createFiltersTemplate(points) {
  return (`<form class="trip-filters" action="#" method="get">
                ${EVENT_FILTER.map((filterType) => `<div class="trip-filters__filter">
                  <input id="filter-${filterType.name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterType}" ${points.length === 0 || filterType.status(points) ? '' : 'disabled'}>
                  <label class="trip-filters__filter-label" for="filter-${filterType.name}">${filterType.name}</label>
                </div>`).join('')}
                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>`);
}

class FiltersView extends AbstractView {
  #point;

  constructor(point) {
    super();
    this.#point = point;
  }

  get template() {
    return createFiltersTemplate(this.#point);
  }
}

export default FiltersView;
