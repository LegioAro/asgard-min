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

//Modal
function isModal() {
  let modalBtns = document.querySelectorAll('.modal__btn-active');

  if (modalBtns.length > 0) {
    for (let modalBtn of modalBtns) {
      modalBtn.addEventListener('click', function () {
        let modalBtnData = modalBtn.getAttribute('data-modal-src');
        let modalWindow = document.querySelector(`*[data-modal-window="${modalBtnData}"]`);
        let body = document.querySelector('body');

        if (modalWindow) {
          modalWindow.classList.add('active');
          body.classList.add('lock');
        }
      });
    }
  }
}
isModal();

function isModalClose() {
  let modalCloseBtns = document.querySelectorAll('.modal__btn-close');
  if (modalCloseBtns.length > 0) {
    for (let modalCloseBtn of modalCloseBtns) {
      modalCloseBtn.addEventListener('click', function () {
        let modalWindow = modalCloseBtn.closest('*[data-modal-window]');
        let body = document.querySelector('body');

        modalWindow.classList.remove('active');
        body.classList.remove('lock');
      });
    }
  }
}
isModalClose();
