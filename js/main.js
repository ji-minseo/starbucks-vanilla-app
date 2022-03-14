const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();

});

searchInputEl.addEventListener('focus', function() {

    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function() {

    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
    if (window.scrollY > 500) {
        //배지 숨기기
        //gsap.to(애니메이션 적용할 요소, 지속시간, 옵션(객체 데이터 {name: value}));
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    }
    else {
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }

}, 300));
//_.throttle(함수, 시간)
//window.scrollY = 화면상 스크롤 위치


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.7
        opacity: 1
    });
});


new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});


new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination',//페이지번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어 가능여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});