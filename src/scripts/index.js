/* eslint-disable import/no-duplicates */
// import lazysizes
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// import css
import '../styles/normalize.css';
import '../styles/header.css';
import '../styles/main.css';
import '../styles/responsive.css';
// import js
import App from './views/App';
import swRegister from './utils/sw-register';
// import components
import './components/navbar';
import './components/hero';
import './components/custom-footer';
// import init app
const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('.nav-list'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('.container').scrollIntoView();
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
