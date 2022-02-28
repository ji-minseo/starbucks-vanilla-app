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