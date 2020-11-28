const menuBtn = document.querySelector('[data-hamburger]');
const menuNav = document.querySelector('[data-nav]');
const menuItems = document.querySelectorAll('[data-nav-anim]');
const body = document.querySelector('body');

const toggleMenu = () => {
    if (menuBtn.classList.contains('open')) {
        menuBtn.classList.remove('open');
        menuNav.classList.remove('header__nav--active');
        
        menuItems.forEach(item => item.style.animation = ``);

    } else {
        menuBtn.classList.add('open');
        menuNav.classList.add('header__nav--active');

        menuItems.forEach((item, idx) => {
            item.style.animation = `nav-anim 500ms ease-in forwards`;
            item.style.animationDelay = `${idx * 300}ms`;
        })
    }
}

export default menuBtn.addEventListener('click', toggleMenu);