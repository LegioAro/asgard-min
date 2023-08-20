isResize('.info-3__video', '.info-3__wrapper', '.info-3__content-video', 1160);
isResize('.info-3__img', '.info-3__wrapper', '.info-3__content-video', 1160);
isResize('.info__img', '.info__wrapper', '.info__content-img', 1160);
isResize(
  '.info--revers .info__img',
  '.info--revers .info__wrapper',
  '.info--revers .info__content-img',
  1160,
);

window.addEventListener('resize', () => {
  isResize('.info-3__video', '.info-3__wrapper', '.info-3__content-video', 1160);
  isResize('.info-3__img', '.info-3__wrapper', '.info-3__content-video', 1160);
  isResize('.info__img', '.info__wrapper', '.info__content-img', 1160);

  isResize(
    '.info--revers .info__img',
    '.info--revers .info__wrapper',
    '.info--revers .info__content-img',
    1160,
  );
});

//header

function headerScroll() {
  const header = document.querySelector('.header');
  if (window.pageYOffset > 0 && !header.classList.contains('header--scroll')) {
    header.classList.add('header--scroll');
  } else if (window.pageYOffset <= 0 && header.classList.contains('header--scroll')) {
    header.classList.remove('header--scroll');
  }
}
headerScroll();

window.addEventListener('scroll', function () {
  headerScroll();
});
