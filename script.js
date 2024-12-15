function toggleMenu() {    
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
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


let bannerContainer = document.querySelector('#banner-section'); 

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY; // Get the current scroll position
    let containerTop = bannerContainer.offsetTop; // Get position of banner
    let containerHeight = bannerContainer.offsetHeight; // Height of the banner

    // How far the banner is from the top, relative to the viewport
    let distanceFromTop = scrollPosition - containerTop + window.innerHeight / 0.9;

    // Normalize the scroll distance to a value between 0 and 1
    let scrollPercent = Math.min(Math.max(distanceFromTop / containerHeight, 0), 1);

    // Scale the banner (base scale of 1, grows to 1.2 as you scroll)
    let scaleValue = 1 + scrollPercent * 0.2; // Adjust 0.2 to control max growth
    bannerContainer.style.transform = `scale(${scaleValue})`;
});
