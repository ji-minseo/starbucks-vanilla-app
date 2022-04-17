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

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion;//값을 반대로!
    if (isHidePromotion) {
        //숨김 클래스 추가
        promotionEl.classList.add('hide');
    }
    else {
        //숨김 클래스 제거
        promotionEl.classList.remove('hide');
        
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    //gsap.to(요소, 시간, 옵션);
    gsap.to(selector, random(1.5, 2.5), {
        y: size, //위에서 아래로 size만큼 내려오게
        repeat: -1, //무한반복
        yoyo: true,//다시 위로 올라가기
        ease: Power1.easeInOut, //이즈 함수 지정
        delay: random(0, delay) //애니메이션 시작 전 지연시작
    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy'); //해당클래스 요소들 모두 spyEls에 각각 저장
spyEls.forEach(function(spyEl){//foreach -> 해당하는요소를 모두 담은 spyEls의 각각 요소(spyEl)에 접근
    //new ScrollMagin.Scene().setClassToggle().addTo();//각SypEl 마다 스크롤매직의 해당 함수 실행
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,//(보여짐 여부를) 감시하려는 각 요소들
            triggerHook: .8 //뷰포트에서 화면의 0.8에 위치한 지점에 트리거엘리먼트가 걸렸을 시 셋클래스토글 실행
        })
        .setClassToggle(spyEl, 'show')//토글할 요소, 토글할 클래스 이름(해당 클래스를 넣었다 뻄)
        .addTo(new ScrollMagic.Controller());//실제로 동작하는 스크롤매직 부분 할당
});
//(scroll-spy 클래스가 있는요소가 뷰포트의 .8이상 내려갈 시 show라는 클래스  부착