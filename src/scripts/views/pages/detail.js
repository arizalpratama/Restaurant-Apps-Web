/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import Spinner from '../templates/spinner';
import RestaurantSource from '../../data/resto-source';
import restoDetail from '../templates/resto-detail';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { initSwalError } from '../../utils/swal-initiator';
import favRestoIdb from '../../data/resto-idb';

const Detail = {
  async render() {
    return `
      <div class="container">
        <div id="loading"></div>

        <div class="like" id="likeButtonContainer"></div>

        <div id="main-container">
          <h2 class="title-container" style="color:black;">Restaurant Details</h2>

          <section id="detail-resto"></section>
          
        </div>
      </div>
    `;
  },

  // Call function after render
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const loading = document.querySelector('#loading');
    const mainContainer = document.querySelector('#main-container');
    const detailContainer = document.querySelector('#detail-resto');

    // change main display to spinner
    mainContainer.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const data = await RestaurantSource.getRestaurantDetail(url.id);

      // use the detail data
      console.info(data);
      detailContainer.innerHTML += restoDetail(data.restaurant);

      // init like button
      LikeButtonPresenter.init({
        data,
        favRestoIdb,
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
      });

      // change spinner display to main
      mainContainer.style.display = 'block';
      loading.style.display = 'none';

      // review form
    } catch (err) {
      console.error(err);

      mainContainer.style.display = 'block';
      loading.style.display = 'none';
      detailContainer.innerHTML = `Error: ${err.message}`;
      initSwalError(err.message);
    }
  },
};

export default Detail;
