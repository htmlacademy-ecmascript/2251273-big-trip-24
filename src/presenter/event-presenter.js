import TripEventsItemView from '../view/trip-events-view/trip-events-item-view.js';
import EditEventFormView from '../view/form-view/edit-event-form-view.js';

import { render, replace } from '../framework/render.js';

import { tracksClickEscape } from '../utils.js';

class EventPresenter {
  #container = null;
  #eventComponent = null;
  #eventEditComponent = null;
  #event = null;

  #handleDataChange = null;

  constructor(container, onDataChange) {
    this.#container = container;
    this.#handleDataChange = onDataChange;
    // this.#handleDataChange = onDataChange;
    // this.#handleModeChange = onModeChange;
  }

  init (event) {
    this.#event = event;

    // const prevEventComponent = this.#eventComponent;
    // const prevEventEditComponent = this.#eventEditComponent;

    this.#eventComponent = new TripEventsItemView(
      this.#event, // точка маршрута
      this.#handleOpenEditFormClick,
      this.#handleFavoriteClick

    );

    this.#eventEditComponent = new EditEventFormView(
      this.#event, // точка маршрута
      this.#handleCloseEditFormClick,
      this.#handleSubmitFormClick
    );

    render(this.#eventComponent, this.#container);
  }

  #handleOpenEditFormClick = () => {
    this.#replaceToEventEditComponent();
  };

  #handleCloseEditFormClick = () => {
    this.#replaceToEventComponent();
  };

  #handleSubmitFormClick = () => {
    this.#replaceToEventComponent();
  };

  #handleFavoriteClick = () => {
    this.#changeFavorite();
  };

  #escKeyDownHandler = (evt) => {
    if (tracksClickEscape(evt)) {
      evt.preventDefault();
      this.#replaceToEventComponent();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #replaceToEventEditComponent() {
    replace(this.#eventEditComponent, this.#eventComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceToEventComponent() {
    replace(this.#eventComponent, this.#eventEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  // #updateData() {
  //   this.#eventComponent.updateData(this.#event);
  //   this.#eventEditComponent.updateData(this.#event);
  // }

  #changeFavorite() {
    this.#event.isFavorite = !this.#event.isFavorite;
    this.#handleDataChange(this.#event);
  }

}

export default EventPresenter;
