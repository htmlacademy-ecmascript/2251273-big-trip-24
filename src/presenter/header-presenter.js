import FiltersView from '../view/filters-view';

import { render } from '../render';

class HeaderPresenter {

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new FiltersView(), this.container);
  }
}

export default HeaderPresenter;
