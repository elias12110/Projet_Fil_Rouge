//Menu Burger Reponsive

document.getElementById('openBtn').addEventListener('click', function () {
    let navbar = document.getElementById('navbar');
    if (navbar.style.display == 'none' || navbar.style.display == '') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
});

//Counter Nombre Clubs

document.addEventListener("DOMContentLoaded", function () {
    const newCounter = document.getElementById("counter");
    let currentCount = 0;
    const targetCount = 270;
    const increment = targetCount / 100;
    const interval = 30;
    const updateCounter = () => {
        if (currentCount < targetCount) {
            currentCount = Math.ceil(currentCount + increment);
            newCounter.textContent = currentCount.toLocaleString();
            setTimeout(updateCounter, interval);
        } else {
            newCounter.textContent = targetCount.toLocaleString();
        }
    };
    updateCounter();
});


//Transition H1

window.addEventListener('scroll', function () {
    const title = document.querySelector('h1');
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY > 100) {
        title.classList.add('scrolled');
    } else {
        title.classList.remove('scrolled');
    }
});

//Transition Design

document.addEventListener("DOMContentLoaded", function () {
    const overlayTexts = document.querySelectorAll('.overlay-text');

    function handleScroll() {
        overlayTexts.forEach(text => {
            const rect = text.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                text.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});