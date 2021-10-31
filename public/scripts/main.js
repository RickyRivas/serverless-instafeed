
// Navigation 1
const body = document.querySelector('body');
const burger = document.querySelector(".hamburger");
const navOverlay = document.querySelector('.navlinks-overlay');
const nav = document.querySelector(".nav-links");

burger.addEventListener('click', () => {
    nav.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    body.classList.toggle('body-fixed');
    navOverlay.classList.toggle('is-active');
})
navOverlay.addEventListener('click', () => {
    nav.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    body.classList.toggle('body-fixed');
    navOverlay.classList.toggle('is-active');
})
// Instagram 
const fetchInsta = async () => {
    const data = await fetch('/.netlify/functions/node-fetch')
        .then((res) => res.json())
        .catch((err) => console.error(err))

    //
    const instafeedDiv = document.querySelector('#instafeed');
    const template = document.querySelector('#post-template')

    data.forEach((post) => {
        const container = template.content.cloneNode(true);
        container.querySelector('p').innerText = post.caption;
        container.querySelector('img').src = post.url;
        container.querySelector('h3').innerText = post.username
        instafeedDiv.appendChild(container);
    }) 
}
fetchInsta();

