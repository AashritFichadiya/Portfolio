$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

srtop.reveal('.hero-copy', { delay: 200 });
srtop.reveal('.experience .timeline', { delay: 350 });
srtop.reveal('.experience .timeline .container', { interval: 250 });

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
        document.title = 'Experience | Aashrit Fichadiya';
        $('#favicon').attr('href', '../assets/images/Avatar.jpeg');
    } else {
        document.title = 'Back To Portfolio';
        $('#favicon').attr('href', '../assets/images/favhand.png');
    }
});

document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
};
