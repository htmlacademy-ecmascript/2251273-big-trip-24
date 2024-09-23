import { COUNT_TRIP_EVENTS } from '../constants.js';

import { getMockEvent } from '../mock/events-mock.js';
import { getMockOffers } from '../mock/offers-mock.js';
import { getMockCities } from '../mock/cities-mock.js';


class EventsModel {
  #events = Array.from({ length: COUNT_TRIP_EVENTS }, getMockEvent);
  #offers = getMockOffers();
  #cities = getMockCities();
  getEvents() {
    const eventsArray = [];

    const sortedEvents = this.#events.sort((a, b) => a.basePrice - b.basePrice);

    sortedEvents.forEach((eventItem) => {
      const eventInfo = {
        id: eventItem.id,
        isFavorite: eventItem.isFavorite,
        event: eventItem,
        city: this.getCityById(eventItem.destination),
        offers: {
          all: this.getOffersByEventType(eventItem.type),
          selected: this.getSelectedOffers(eventItem.type, eventItem.offers),
        },
        costEvent: eventItem.basePrice + this.getSelectedOffers(eventItem.type, eventItem.offers).reduce((acc, offer) => acc + offer.price, 0),
      };
      eventsArray.push(eventInfo);
    });
    return eventsArray;
  }

  getOffers() {
    return this.#offers;
  }

  getSelectedOffers(type, offers) {
    return this.getOffersByEventType(type).filter(
      (offer) => offers.includes(offer.id));
  }

  getOffersByEventType(type) {
    const offer = this.getOffers().find((offerItem) => offerItem.type === type);
    return offer.offers;
  }

  getCities() {
    return this.#cities;
  }

  getCityById(id) {
    return this.getCities().find((city) => city.id === id);
  }
}


export default EventsModel;
