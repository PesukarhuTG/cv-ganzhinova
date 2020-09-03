// initialize animation wow.min.js

new WOW().init();

// initialize slider with portfolio swiper-bundle.min.js

var mySwiper = new Swiper('.swiper-container', {

    speed: 400,
    
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.projects-pagination',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
        clickable: true,
        
        
    },
});

// initialize sclick title in portfolio (pure js)

let portfolioTitles = document.querySelectorAll('.practice-name');

portfolioTitles.forEach(function(portfolioTitle) {
    portfolioTitle.addEventListener('click', setClass);

    function setClass() {
        if (portfolioTitle.closest('.select').classList.contains('active')) {
            portfolioTitle.closest('.select').classList.remove('active');

        } else {
            portfolioTitle.closest('.select').classList.add('active');
        }
    };
})
