import HeaderPresenter from './presenter/header-presenter.js';
import MainPresenter from './presenter/main-presenter.js';

// Containers Header/Filters
const pageHeader = document.querySelector('.page-header');
const pageHeaderContainer = pageHeader.querySelector('.page-header__container');
const pageHeaderContentContainer = pageHeaderContainer.querySelector('.trip-main');
const tripControlsFiltersContainer = pageHeaderContentContainer.querySelector('.trip-controls__filters');

//Containers Main/Sort
const pageMain = document.querySelector('.page-main');
const pageMainContainer = pageMain.querySelector('.page-body__container');
const tripEvents = pageMainContainer.querySelector('.trip-events');

// Filters
const headerFiltersContainer = new HeaderPresenter({
  container: tripControlsFiltersContainer
});

// Sort
const mainSortContainer = new MainPresenter({
  container: tripEvents
});

// init headerPresenter
headerFiltersContainer.init();
mainSortContainer.init();

