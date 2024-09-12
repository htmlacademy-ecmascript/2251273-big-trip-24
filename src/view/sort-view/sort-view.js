import AbstractView from '../../framework/view/abstract-view.js';

import { EVENT_SORT } from '../../constants.js';

function createSortTemplate() {
  return (`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">

            ${EVENT_SORT.map((sortType) => `<div class="trip-sort__item  trip-sort__item--${sortType}">
              <input id="sort-${sortType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType}">
              <label class="trip-sort__btn" for="sort-${sortType}">${sortType}</label>
            </div>`).join('')}

          </form>`);
}

class SortView extends AbstractView {
  get template() {
    return createSortTemplate();
  }
}

export default SortView;
