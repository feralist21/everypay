window.onload = function () {
  toggleMobileMenu();
  introSlider();
  casesSlider();
  callbackForm();
  subscribeForm();
};

function toggleMobileMenu() {
  const toggleBtn = document.querySelector('.js-toggle');
  const mobileMenuWrap = document.querySelector('.js-menu');

  if (toggleBtn && mobileMenuWrap) {
    toggleBtn.addEventListener('click', function () {
      mobileMenuWrap.classList.toggle('header-mobile__menu-wrap--active');
    });
  }
}

function introSlider() {
  const swiper = new Swiper('.intro__slider', {
    loop: true,
    autoHeight: true,
  });
}

function casesSlider() {
  if (window.innerWidth <= 768) {
    const swiper = new Swiper('.cases-slider', {
      loop: false,
      spaceBetween: 20,
      slidesPerView: 'auto',
      pagination: {
        el: '.cases-pagination',
      },
    });
  };
}

function callbackForm() {
  const callbackForm = document.querySelector('.form-callback');

  if (callbackForm) {
    callbackForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
      const callbackDone = document.querySelector('.form-callback__done');
      callbackDone.classList.add('form-callback__done--active');
    });
  }
}

function subscribeForm() {
  const subscribeForm = document.querySelectorAll('.subscribe-form');

  if (subscribeForm) {
    subscribeForm.forEach(element => {
      element.addEventListener('submit', function(evt) {
        evt.preventDefault();
        const subscribeDone = element.querySelector('.subscribe-form__done');
        subscribeDone.classList.add('subscribe-form__done--active');
      });
    });

  }
}
