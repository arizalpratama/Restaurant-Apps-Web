/* eslint-disable no-undef */
import FavRestoIdb from '../src/scripts/data/resto-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking Resto', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavRestoIdb.putResto({ id: 1 });
  });
  afterEach(async () => {
    await FavRestoIdb.deleteResto(1);
  });
  it('should display unfavorite widget when the restaurant has been favorited', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(
      document.querySelector('[aria-label="unlike this resto"]'),
    ).toBeTruthy();
  });
  it('should not display unfavorite widget when the resto has been favorited', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(
      document.querySelector('[aria-label="like this resto"]'),
    ).toBeFalsy();
  });
  it('should be able to remove favorited restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event('click'));
    const allResto = await FavRestoIdb.getAllResto();

    expect(allResto).toEqual([]);
  });
  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    await FavRestoIdb.deleteResto(1);
    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event('click'));
    const allResto = await FavRestoIdb.getAllResto();
    expect(allResto).toEqual([]);
  });
});
