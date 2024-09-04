import HeaderPresenter from './presenter/header-presenter.js';
import MainPresenter from './presenter/main-presenter.js';

import EventsModel from './model/events-model.js';

// Containers Header
const pageHeader = document.querySelector('.page-header');
const pageHeaderContainer = pageHeader.querySelector('.page-header__container');
const pageHeaderContentContainer = pageHeaderContainer.querySelector('.trip-main');
const tripControlsFiltersContainer = pageHeaderContentContainer.querySelector('.trip-controls__filters');

//Containers Main
const pageMain = document.querySelector('.page-main');
const pageMainContainer = pageMain.querySelector('.page-body__container');
const tripEvents = pageMainContainer.querySelector('.trip-events');

// Model
const eventsModel = new EventsModel();

// Header
const headerContainer = new HeaderPresenter(pageHeaderContentContainer, tripControlsFiltersContainer, eventsModel);

// Main
const mainContainer = new MainPresenter(tripEvents, eventsModel);

// init
headerContainer.init();
mainContainer.init();
