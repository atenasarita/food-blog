function toggleMenu() {    
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


const intro = document.querySelector('.intro');
const logo = document.querySelector('.logo-header');
const logoSpans = document.querySelectorAll('.logo-1, .logo-2');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(fadeInLogoSpans, 200);
});

function fadeInLogoSpans() {
    logoSpans.forEach((span) => span.classList.add('fade-in'));

    setTimeout(() => {
        logoSpans.forEach((span) => span.classList.add('active'));
    }, 1000);

    setTimeout(() => {
        logoSpans.forEach((span) => span.classList.add('reposition'));
      }, 1500);    

    setTimeout(fadeOutIntro, 1600); // After 1.5s, the logo will fade out
}

function fadeOutIntro() {
    intro.classList.add('out');

    setTimeout(removeIntro, 1000); // Wait for the intro to fully wipe off
}

function removeIntro() {
    intro.remove(); // Remove the entire intro from the DOM
    logo.remove();
}


let section1Items = document.querySelectorAll('.about-pic-container, .section_text');
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    section1Items.forEach(section1Items => {
        let containerTop = section1Items.offsetTop;
        let containerHeight = section1Items.offsetHeight;
        
        if (scrollPosition >= containerTop - window.innerHeight  && 
            scrollPosition < containerTop + containerHeight - window.innerHeight / 6) {
                section1Items.classList.add('show-animate');
        }
    });
});