/* eslint-disable prefer-template */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyFavoriteRestoText = 'Empty favorite Resto';

Scenario('insert favorite restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '#fav-resto');
  I.amOnPage('/');
  I.seeElement('.card a');
  const firstRestoCard = locate('.card-content-title').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.card');

  const likedCardTitle = await I.grabTextFrom('.card-content-title');
  // eslint-disable-next-line quotes
  console.log("First resto name:" + firstRestoCardTitle);
  // eslint-disable-next-line quotes
  console.log("Favorited resto name:" + likedCardTitle);
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});

Scenario('remove favorite restaurant', async ({ I }) => {
  I.seeElement('.card');
  const likedCardTitle = await I.grabTextFrom('.card-content-title');
  I.click(likedCardTitle);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('#fav-resto');
  I.dontSeeElement('.card');
  I.dontSeeElement('.card-content-title');
});

Scenario('empty favorite restaurant', ({ I }) => {
  I.seeElement('#fav-resto');
  I.see(emptyFavoriteRestoText, '#fav-resto');
});