import AbstractView from '../../framework/view/abstract-view.js';

import { EVENT_FILTER } from '../../constants.js';

function createFiltersTemplate() {
  return (`<form class="trip-filters" action="#" method="get">
                ${EVENT_FILTER.map((filterType) => `<div class="trip-filters__filter">
                  <input id="filter-${filterType}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterType}">
                  <label class="trip-filters__filter-label" for="filter-${filterType}">${filterType}</label>
                </div>`).join('')}
                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>`);
}

class FiltersView extends AbstractView {
  get template() {
    return createFiltersTemplate();
  }
}

export default FiltersView;
