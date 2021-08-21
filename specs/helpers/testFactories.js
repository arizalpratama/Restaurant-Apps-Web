/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavRestoIdb from '../../src/scripts/data/resto-idb';

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favRestoIdb: FavRestoIdb,
    data: {
      restaurant,
    },
  });
};

export { createLikeButtonPresenterWithResto };
