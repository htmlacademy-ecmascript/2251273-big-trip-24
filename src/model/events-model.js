import dayjs from 'dayjs';

import { COUNT_TRIP_EVENTS } from '../constants.js';

import { getRandomMockEvent } from '../mock/events-mock.js';
import { getMockOffers } from '../mock/offers-mock.js';
import { getMockCities } from '../mock/cities-mock.js';


class EventsModel {
  events = Array.from({ length: COUNT_TRIP_EVENTS }, getRandomMockEvent);
  offers = getMockOffers();
  cities = getMockCities();

  getEvents() {
    const eventsArray = [];

    const sortedEvents = this.events.sort((a, b) => dayjs(a.dateFrom).diff(dayjs(b.dateFrom)));

    sortedEvents.forEach((eventItem) => {
      const eventInfo = {
        event: eventItem,
        city: this.getCityById(eventItem.destination),
        selectedOffers: this.getSelectedOffers(eventItem.type, eventItem.offers),
        amountSelectedOffers: this.getSelectedOffers(eventItem.type, eventItem.offers).reduce((acc, offer) => acc + offer.price, 0),
      };
      eventsArray.push(eventInfo);
    });
    return eventsArray;
  }

  getOffers() {
    return this.offers;
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
    return this.cities;
  }

  getCityById(id) {
    return this.getCities().find((city) => city.id === id);
  }
}


export default EventsModel;
