import SortView from '../view/sort-view';

import {render} from '../render';

class MainPresenter {

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new SortView(), this.container);
  }
}

export default MainPresenter;
