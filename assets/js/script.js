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

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    let url='https://script.google.com/macros/s/AKfycbzCouCTek5SQoI-m2dFtPavTquH5mAEXoaMoIYXRTayWcz9M3aByfgQpqTSV4ccBjpW/exec'
        let contactform=document.querySelector('#contactform');
        contactform.addEventListener("submit",(e)=>{
          let d=new FormData(contactform);
          fetch(url,{
            method:"POST",
            body:d
          }).then((res)=>res.text())
          .then((finalRes)=>console.log(finalRes,alert("Form Submitted Sucessfully")))
          contactform.reset();
          setTimeout(()=>5000)
          e.preventDefault();
        })
    /*$("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });*/
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Aashrit Fichadiya";
            $("#favicon").attr("href", "./assets/images/Avatar.jpeg");
        }
        else {
            document.title = "Back To Portfolio";
            $("#favicon").attr("href", "./assets/images/favhand.png");
        }
    });




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

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    let url='https://script.google.com/macros/s/AKfycbzCouCTek5SQoI-m2dFtPavTquH5mAEXoaMoIYXRTayWcz9M3aByfgQpqTSV4ccBjpW/exec'
        let contactform=document.querySelector('#contactform');
        contactform.addEventListener("submit",(e)=>{
          let d=new FormData(contactform);
          fetch(url,{
            method:"POST",
            body:d
          }).then((res)=>res.text())
          .then((finalRes)=>console.log(finalRes,alert("Form Submitted Sucessfully")))
          contactform.reset();
          setTimeout(()=>5000)
          e.preventDefault();
        })
    /*$("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });*/
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Aashrit Fichadiya";
            $("#favicon").attr("href", "./assets/images/Avatar.jpeg");
        }
        else {
            document.title = "Back To Portfolio";
            $("#favicon").attr("href", "./assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: [ "Android Development", "Flutter Development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

const skillsData = [
    { "name": "Android", "icon": "https://img.icons8.com/fluency/48/000000/android-os.png" },
    { "name": "Kotlin", "icon": "https://img.icons8.com/color/48/000000/kotlin.png" },
    { "name": "Flutter", "icon": "https://img.icons8.com/color/48/000000/flutter.png" },
    { "name": "Dart", "icon": "https://img.icons8.com/color/48/000000/dart.png" },
    { "name": "Firebase", "icon": "https://img.icons8.com/color/48/000000/firebase.png" },
    { "name": "SQLite", "icon": "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" },
    { "name": "Java", "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" },
    { "name": "C++", "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" }
    // Web and other skills commented out per request
    // { "name": "HTML5", "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png" },
    // { "name": "CSS3", "icon": "https://img.icons8.com/color/48/000000/css3.png" },
    // { "name": "JavaScript", "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png" },
    // { "name": "React-JS", "icon": "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
    // { "name": "C", "icon": "https://img.icons8.com/color/48/000000/c-programming.png" },
    // { "name": "PHP", "icon": "https://img.icons8.com/offices/48/000000/php-logo.png" },
    // { "name": "Python", "icon": "https://img.icons8.com/color/48/000000/python--v1.png" },
    // { "name": "Joomla", "icon": "https://img.icons8.com/color/48/000000/joomla.png" },
    // { "name": "C#", "icon": "https://img.icons8.com/color/48/000000/c-sharp-logo.png" },
    // { "name": "ASP.NET", "icon": "https://img.icons8.com/color/48/net-framework.png" }
];

const projectsData = [
  {
    "name": "GST Calculator",
    "desc": "Comprehensive GST calculation tool featuring multiple tax rates, history tracking, and a clean user interface as seen in the latest screens.",
    "image": "GST Calculator.png",
    "category": "android",
    "links": { "view": "#", "code": "#" }
  },
  {
    "name": "Secure Calc",
    "desc": "A secure and high-performance calculator app for Android, designed with privacy and utility in mind.",
    "image": "SecureCalc.png",
    "category": "android",
    "links": { "view": "#", "code": "#" }
  },
  {
    "name": "QR Code Scanner And Generator",
    "desc": "Flutter app for creating and scanning QR codes with a clean, practical mobile user experience.",
    "image": "composey.png",
    "category": "flutter",
    "links": { "view": "#", "code": "#" }
  },
  {
    "name": "ShieldLoom",
    "desc": "Flutter project built around modern UI structure, smooth navigation, and polished app interactions.",
    "image": "portfolio1.PNG",
    "category": "flutter",
    "links": { "view": "#", "code": "#" }
  },
  {
    "name": "The 15 Driver & User App",
    "desc": "Native Android application for driver and user flows with production-style screens and mobile usability.",
    "image": "webviewapp.PNG",
    "category": "android",
    "links": { "view": "#", "code": "#" }
  },
  {
    "name": "Epidi & Symplx",
    "desc": "Native Android work featuring real-world app flows, scalable screens, and practical user-focused features.",
    "image": "jspro.PNG",
    "category": "android",
    "links": { "view": "#", "code": "#" }
  }
  // Web and other projects commented out per request
  /*
  ,{
    "name": "React JS Practice",
    "desc": "Frontend practice project exploring reusable components, interactive UI patterns, and modern JavaScript.",
    "image": "jspro.PNG",
    "category": "web",
    "links": { "view": "#", "code": "#" }
  },
  {
    "name": "Portfolio Website",
    "desc": "Personal portfolio built with HTML, CSS, and JavaScript to showcase skills, experience, and selected work.",
    "image": "portfolio.PNG",
    "category": "web",
    "links": { "view": "#", "code": "#" }
  }
  */
];

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer")
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="skill-card tilt">
            <img src="${skill.icon}" alt="${skill.name} icon" />
            <span>${skill.name}</span>
        </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    if (!projectsContainer) return;

    let projectHTML = "";
    projects.slice(0, 6).forEach(project => {
        projectHTML += `
        <div class="box project-card tilt">
      <img draggable="false" src="./assets/images/projects/${project.image}" alt="${project.name}" onerror="this.onerror=null;this.src='./assets/images/Avatar.jpeg';" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn"><i class="fas fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // Projects loaded successfully.

}

showSkills(skillsData);
showProjects(projectsData);

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});


//pre loader start
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut() {
    setInterval(loader, 500);
}
window.onload = fadeOut;
// pre loader end

// disable developer mode
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
}

// Start of Tawk.to Live Chat
/*var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();*/
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
