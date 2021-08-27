const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const refs = {
jsGalleryList: document.querySelector('.js-gallery'),
jsLightbox: document.querySelector('.js-lightbox'),
lightboxOverlay:document.querySelector('.lightbox__overlay'),
lightboxImage:document.querySelector('.lightbox__image'),
lightboxButton: document.querySelector('.lightbox__button'),
galleryImage: document.querySelector('.gallery__image'),
}

refs.jsGalleryList.innerHTML =
  galleryItems.map(({ preview, original, description }) =>
   
  `<li class="gallery__item">
 <a class="gallery__link" href="${original}">
 <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
      </a>
      </li>`
 )
 .join("")



refs.jsGalleryList.addEventListener('click', onListClick)

function onListClick(e) {
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  e.preventDefault();

  refs.jsLightbox.classList.add('is-open');
  refs.lightboxImage.src = e.target.dataset.source;
  refs.lightboxImage.alt = e.target.alt;
  refs.lightboxImage.classList.add('is-shown')

 window.addEventListener('keydown', keyClickListener);
}


refs.jsLightbox.addEventListener('click', e => {
  const target = e.target;
  if (target.classList.contains('lightbox__button') || target.matches('.lightbox__overlay') ) {
    cartModalClose();
  }
  window.removeEventListener('keydown', keyClickListener);
})

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape'|| e.key ==='Esc') {
    cartModalClose()
  }
})


const cartModalClose = () => {
  refs.jsLightbox.classList.remove('is-open');
  refs.lightboxImage.classList.remove('is-shown')
  refs.lightboxImage.src = "";
  refs.lightboxImage.alt = "";
}




let arr = [];
let images = document.querySelectorAll('.gallery__image');
const originalSrc = images.forEach(img => arr.push(img.dataset.source));



function keyClickListener(e) {
const isShown = document.querySelector('.is-shown')
const currentSrc = isShown.src;
  
  let i = arr.indexOf(currentSrc);
  if (e.key === 'ArrowRight') {
  console.log('ArrowRight')
      if (arr.length - 1 > i) {
      i += 1;
        refs.lightboxImage.src = arr[i];

    }
    }
    else if (e.key === 'ArrowLeft'){
  console.log('ArrowLeft')
       if ( i > 0) {
      i -= 1;
         refs.lightboxImage.src = arr[i];
         
    }
}
}