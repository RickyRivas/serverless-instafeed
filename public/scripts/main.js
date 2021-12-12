let instafeedDiv = document.querySelector('#instafeed');
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
        .catch((err) => alert(err))
    console.log(data)
    //
    let result = '';
    data.forEach(postData => {
        console.log(postData)
        if (!postData.caption) {
            postData.caption = 'No caption was created for this post or user deleted the caption after post was created.'
        }
        result += `
            <div class='post'>
                <div class='img'>
                    <img src=${postData.url} alt='' class=''>
                </div>
                <div class='body'>
                    <div class='username'>
                    <img src='assets/instagram.svg' alt class>
                    <p>${postData.username}</p>
                    </div>
                <p>${postData.caption}</p>
                <p class='id'>Post ID: ${postData.id}</p>
                </div>
            </div>
        `
        // Append to DOM
        instafeedDiv.innerHTML = result
    })
}
fetchInsta();

