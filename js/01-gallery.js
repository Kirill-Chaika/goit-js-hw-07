import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const galleryCardsSet = createOfGallery(galleryItems);

function createOfGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" ${original} ">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", galleryCardsSet);
galleryContainer.addEventListener("click", selectGalleryEl);

function selectGalleryEl(event) {
  const galleryImage = event.target.classList.contains("gallery__image");
  if (!galleryImage) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source} " width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onKeydownEsc);
      },
      onClose: () => {
        window.removeEventListener("keydown", onKeydownEsc);
      },
    }
  );

  const onKeydownEsc = (event) => {
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
    }
  };

  instance.show();
}
