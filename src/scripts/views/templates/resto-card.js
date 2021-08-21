import CONFIG from '../../global/config';

const restoCard = (resto) => `
    <div tabindex="0" class="card">
      <a href="#/resto/${resto.id}" class="card-a-tag">
        <div class="img-container">
          <img tabindex="0" class="card-image lazyload" crossorigin="anonymous" alt="${
  resto.name}" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"/>
          <span tabindex="0" class="card-rating">
          <i class="fa fa-globe"></i>
            <span>${resto.city}</span>
          </span>
        </div>

        <div tabindex="0" class="card-content">
          <p class="card-content-title">${resto.name}</p>
          <p class="fa fa-star"> Rating: ${resto.rating}</p>
          <p class="card-desc">${resto.description}</p>
        </div>
      </a>
    </div>
  `;

export default restoCard;
