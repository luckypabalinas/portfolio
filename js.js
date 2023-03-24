const menu = document.querySelector(".hamburger");
const menuLink = document.querySelector(".nav-menu");
const navLogo = document.querySelector(".nav-logo");

const hamburger = () => {
    menu.classList.toggle('is-active')
    menuLink.classList.toggle('active')
};

menu.addEventListener('click', hamburger);

const hideHamburger = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLink.classList.remove('active');
    }
}

menuLink.addEventListener('click', hideHamburger);
navLogo.addEventListener('click', hideHamburger);

const icons = document.querySelectorAll(".icon");
const bg = document.querySelector("body");
const dark = document.querySelector('.fa-moon')
const light = document.querySelector('.fa-sun')
const btn = document.querySelector('.dark-mode')

const chngBg = () => {
    bg.classList.toggle('night');
    icons.forEach(icon => icon.classList.toggle('asd'));
    if (bg.classList.contains('night')) {
        dark.style.display = 'none';
        light.style.display = 'block';
    } else {
        light.style.display = 'none';
        dark.style.display = 'block';
    }
};


btn.addEventListener('click', chngBg);

const loader = document.querySelector(".preloader");

window.addEventListener("load", function(){
    loader.style.display = "none"
})
