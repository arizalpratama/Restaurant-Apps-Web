/* eslint-disable no-undef */
import FavRestoIdb from '../src/scripts/data/resto-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Liking Resto', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });
  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(
      document.querySelector('[aria-label="like this resto"]'),
    ).toBeTruthy();
  });
  it('should not show the favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(
      document.querySelector('[aria-label="unlike this resto"]'),
    ).toBeFalsy();
  });
  it('should be able to click favorite button', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavRestoIdb.getResto(1);
    expect(resto).toEqual({ id: 1 });
    await FavRestoIdb.deleteResto(1);
  });
  it('should not add a restaurant again when its already favorited', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    await FavRestoIdb.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const allResto = await FavRestoIdb.getAllResto();
    expect(allResto).toEqual([{ id: 1 }]);
    await FavRestoIdb.deleteResto(1);
  });
  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const allResto = await FavRestoIdb.getAllResto();
    expect(allResto).toEqual([]);
  });
});
