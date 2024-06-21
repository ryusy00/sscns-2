// 마우스 커서 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove',function(e) {
        // 마우스 위치에 따라 커서 아이콘 위치 업데이트
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
    });
});

// 퀵 네비게이션 효과
$(function() {
    $('.menuBtn'). on('click', 
    function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('#gnb').toggleClass('visible');
    });
});

// pc네비게이션
$(function() {
    var hideDelay = 300; // delay in milliseconds

    $('#menu > li').hover(function() {
        // Clear any existing hide timer
        clearTimeout($(this).data('hideTimer'));

        // Stop any ongoing animation and slide down the submenu
        $(this).find('.sub1').stop(true, true).slideDown();
    }, function() {
        var $submenu = $(this).find('.sub1');

        // Set a timer to slide up the submenu after a delay
        var hideTimer = setTimeout(function() {
            $submenu.stop(true, true).slideUp();
        }, hideDelay);

        // Store the timer in the data for this menu item
        $(this).data('hideTimer', hideTimer);
    });
});

// 메인배너 넘어갔을 때, 네비게이션 색상 변경 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('topBox');
    const bannerHeight = 1300; // 메인 배너 높이

    window.addEventListener('scroll', function() {
        if (window.scrollY > bannerHeight) { // 스크롤 위치가 메인 배너 높이 이상일 때
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const introSection = document.getElementById('introduction');
    const introTextWrap = document.getElementById('intro-text-wrap');
    const h2Element = introTextWrap.querySelector('h2');
    const h5Element = introTextWrap.querySelector('h5');
    const pElement = introTextWrap.querySelector('p');

    function checkScroll() {
        const introPosition = introSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (introPosition < screenPosition) {
            introTextWrap.style.opacity = 1; // 텍스트 랩의 불투명도를 1로 설정
            h2Element.classList.add('active');
        }
    }
    // h2 애니메이션이 끝난 후 h5와 p 애니메이션을 시작
    h2Element.addEventListener('transitionend', function() {
        h5Element.classList.add('active');
        pElement.classList.add('active');
    });

    window.addEventListener('scroll', checkScroll);
});

document.addEventListener('DOMContentLoaded', function() {
    const topButton = document.getElementById('top-btn');

    topButton.addEventListener('click', function(event) {
        event.preventDefault(); // a 태그의 기본 동작을 막음
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드럽게 스크롤
        });
    });
});

// 사없호개 영역 스크롤 시 fade-in 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('#business-content-wrap > ul > li');

    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;

        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check on page load
});
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('#business-content-wrap > ul > li');

    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;

        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check on page load
});

// 전체 요소 스크롤 시, 애니메이션
window.addEventListener('scroll', function() {
    // 스크롤 위치
    var scrollPosition = window.scrollY;
    // 애니메이션을 시작할 위치
    var triggerPosition = document.getElementById('solution-content-wrap').offsetTop - window.innerHeight;
    var triggerPosition2 = document.getElementById('contact-wrap').offsetTop - window.innerHeight;

    if (scrollPosition > triggerPosition) {
        document.querySelector('#solution-wrap > h2').classList.add('animated');
        document.getElementById('yescare').classList.add('animated');
        document.getElementById('IL').classList.add('animated');
        document.getElementById('scms').classList.add('animated');
        document.getElementById('permanent').classList.add('animated');
    }
    if (scrollPosition > triggerPosition2) {
        document.getElementById('contact-title-wrap').classList.add('animated');
        document.getElementById('contact-content-wrap').classList.add('animated');
    }
});