var mapInit = document.querySelector('.about__map-popup');
var mapModal = document.querySelector('.map-modal');
var formInit = document.querySelector('.about__link--modal');
var formModal = document.querySelector('.write-us');
var mapModalClose = document.querySelector('.map-modal__close');
var formModalClose = document.querySelector('.write-us__close');
var slideDelivery = document.getElementById('delivery');
var slideWarranty = document.getElementById('warranty');
var slideCredit = document.getElementById('credit');
var writeUsForm = document.querySelector('.write-us__form');
var userName = document.querySelector('[name=fullname]');
var userEmail = document.querySelector('[name=email]');
var catalogInnerInit = document.querySelector('.main-menu__link--catalog');
var catalogInner = document.querySelector('.main-menu__list');
var catalogInnerLink = document.querySelectorAll('.catalog-menu__link');

catalogInnerInit.addEventListener('focus', function () {
  catalogInner.classList.add('catalog-list-opened');
});

Array.prototype.slice.call(catalogInnerLink).forEach(function(item) {
  item.addEventListener('focus', function () {
    catalogInner.classList.add('catalog-list-opened');
  });
});

Array.prototype.slice.call(catalogInnerLink).forEach(function(item) {
  item.addEventListener('blur', function () {
    catalogInner.classList.remove('catalog-list-opened');
  });
});

if (mapModal) {
  mapInit.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapModal.classList.remove('hidden');
    formModal.classList.add('hidden');
  });

  mapModalClose.addEventListener('click', function () {
    mapModal.classList.add('hidden');
  });

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(55.687130, 37.529646),
      zoom: 17
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var image = 'img/map-marker.png';

    var myLatLang = new google.maps.LatLng(55.687130, 37.529646);
    var myMarker = new google.maps.Marker({
      position: myLatLang,
      map: map,
      icon: image,
      title: 'Мы вас ОЧЕНЬ ждём! :-)'
    });
  }
}

if (formModal) {
  formInit.addEventListener('click', function (evt) {
    evt.preventDefault();
    formModal.classList.remove('hidden');
    mapModal.classList.add('hidden');
    userName.focus();
    userName.classList.remove('input-text__field--invalid');
    userEmail.classList.remove('input-text__field--invalid');
  });

  writeUsForm.addEventListener('submit', function (evt) {
    if (!userName.value) {
      evt.preventDefault();
      userName.classList.add('input-text__field--invalid');
    }

    if (!userEmail.value) {
      evt.preventDefault();
      userEmail.classList.add('input-text__field--invalid');
    }
  });

  userName.addEventListener('focus', function () {
    userName.classList.remove('input-text__field--invalid');
  });

  userEmail.addEventListener('focus', function () {
    userEmail.classList.remove('input-text__field--invalid');
  });

  formModalClose.addEventListener('click', function () {
    formModal.classList.add('hidden');
  });

  window.addEventListener("keydown", function (event) {
      if (event.keyCode == 27) {
        event.preventDefault();
        mapModal.classList.add('hidden');
        formModal.classList.add('hidden');
        userName.classList.remove('input-text__field--invalid');
        userEmail.classList.remove('input-text__field--invalid');
      }
    }
  );
}

if (slideDelivery) {

  var data = {
    delivery: {
      title: 'Доставка',
      text: 'Мы с удовольствием доставим ваш товар прямо к вашему подъезду совершенно бесплатно! Ведь мы неплохо заработаем, поднимая его на ваш этаж.'
    },
    warranty: {
      title: 'Гарантия',
      text: 'Если из-за возгорания купленного у нас товара у вас сгорит дом — не переживайте, мы выдадим вам новый.\n' +
      'Товар, не дом, конечно же.'
    },
    credit: {
      title: 'Кредит',
      text: 'Залезть в долговую яму стало проще! Кредитные консультанты подберут для вас наиболее выгодные \n' +
      'условия кредита. Выгодные для нашего банка, разумеется.'
    }
  };

  slideDelivery.addEventListener('click', function () {
    slideDelivery.classList.add('slider-service__button--current');
    slideWarranty.classList.remove('slider-service__button--current');
    slideCredit.classList.remove('slider-service__button--current');

    var slideTitle = document.querySelector('.slider-service__title');
    slideTitle.innerText = data.delivery.title;

    var slideText = document.querySelector('.slider-service__text');
    slideText.innerText = data.delivery.text;

    var slideImage = document.querySelector('.slider-service__item');
    slideImage.style.backgroundImage = 'url("img/icon-delivery.svg")';
    slideImage.style.backgroundPosition = 'right 67px top 85px';
  });

  slideWarranty.addEventListener('click', function () {
    slideWarranty.classList.add('slider-service__button--current');
    slideCredit.classList.remove('slider-service__button--current');
    slideDelivery.classList.remove('slider-service__button--current');

    var title = document.querySelector('.slider-service__title');
    title.innerText = data.warranty.title;

    var slideText = document.querySelector('.slider-service__text');
    slideText.innerText = data.warranty.text;

    var slideImage = document.querySelector('.slider-service__item');
    slideImage.style.backgroundImage = 'url("img/icon-warranty.svg")';
    slideImage.style.backgroundPosition = 'right 47px top 61px';
  });

  slideCredit.addEventListener('click', function () {
    slideCredit.classList.add('slider-service__button--current');
    slideDelivery.classList.remove('slider-service__button--current');
    slideWarranty.classList.remove('slider-service__button--current');

    var title = document.querySelector('.slider-service__title');
    title.innerText = data.credit.title;

    var slideText = document.querySelector('.slider-service__text');
    slideText.innerText = data.credit.text;

    var slideImage = document.querySelector('.slider-service__item');
    slideImage.style.backgroundImage = 'url("img/icon-credit.svg")';
    slideImage.style.backgroundPosition = 'right 71px top 60px';
  });

}
