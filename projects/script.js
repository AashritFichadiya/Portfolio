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

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Projects | Aashrit Fichadiya";
            $("#favicon").attr("href", "../assets/images/Avatar.jpeg");
        }
        else {
            document.title = "Back To Portfolio";
            $("#favicon").attr("href", "../assets/images/favhand.png");
        }
    });


// fetch projects start
function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
}

let filterTransitionTimer = null;

function applyProjectFilter(filterValue, skipAnimation = false) {
    const projectItems = Array.from(document.querySelectorAll('.work .grid-item'));
    if (!projectItems.length) return;

    const showAll = filterValue === '*';
    const matchesFilter = (item) => showAll || item.classList.contains(filterValue.slice(1));

    if (filterTransitionTimer) {
        clearTimeout(filterTransitionTimer);
        filterTransitionTimer = null;
    }

    if (skipAnimation) {
        projectItems.forEach(item => {
            item.classList.remove('is-transitioning');
            item.classList.toggle('is-hidden', !matchesFilter(item));
        });
        return;
    }

    projectItems.forEach(item => {
        item.classList.add('is-transitioning');
    });

    filterTransitionTimer = setTimeout(() => {
        projectItems.forEach(item => {
            item.classList.toggle('is-hidden', !matchesFilter(item));
        });

        requestAnimationFrame(() => {
            projectItems.forEach(item => {
                item.classList.remove('is-transitioning');
            });
        });
    }, 160);
}


function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
        <div class="box project-card">
      <img draggable="false" src="../assets/images/projects/${project.image}" alt="${project.name}" onerror="this.onerror=null;this.src='../assets/images/Avatar.jpeg';" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>
    </div>`
    });
    projectsContainer.innerHTML = projectsHTML;

    // filter items on button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        applyProjectFilter(filterValue);
    });

    applyProjectFilter('*', true);
}

getProjects().then(data => {
    showProjects(data);
})
// fetch projects end

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

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
