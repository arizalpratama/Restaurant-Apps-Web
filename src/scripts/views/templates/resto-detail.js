/* eslint-disable indent */
import CONFIG from '../../global/config';

const restoDetail = (resto) => `
  <div class="detail">
    <div class="img-container">
        <img class="detail-img" alt="${resto.name}" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}"/>
    </div>

    <ul class="detail-info">
      <li>
        <i title="restaurant"></i>
        <p class="detail-name-address-rating"><b>Name:</b> ${resto.name}</p>
      </li>

      <li>
        <i title="address"></i>
        <p class="detail-name-address-rating"><b>Address:</b> ${resto.address}</p>
      </li>

      <li>
        <i title="city"></i>
        <p class="detail-name-address-rating"><b>City:</b> ${resto.city}</p>
      </li>

      <li>
        <i title="ratings"></i>
        <p class="detail-name-address-rating"><b>Ratings:</b> ${resto.rating}</p>
      </li>

      <li>
      <i title="foods"></i>
      <p class="detail-name-address-rating"><b>Foods:</b> ${resto.menus.foods
    .map(
      (food) => `
            ${food.name}
          `,
    )
    .join('')} </p>
      </li>

      <li>
      <i title="drinks"></i>
      <p class="detail-name-address-rating"><b>Drinks:</b> ${resto.menus.drinks
    .map(
      (drink) => `
            ${drink.name}
          `,
    )
    .join('')} </p>
      </li>

      <li><p class="detail-desc"><b>Description:</b> ${resto.description}</p></li>

      <li><p class="detail-desc"><b>Reviews:</b> ${resto.customerReviews
    .map(
      (review) => `
          <br><br/>
           Name: ${review.name} <br><br/>
           Date: ${review.date} <br><br/>
           Comment: ${review.review} <br/>
          `,
    )
    .join('')}
      </p></li>

    </ul>
  </div>
`;

export default restoDetail;
