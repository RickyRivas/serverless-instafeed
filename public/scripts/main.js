//
async function fetchInsta() {
        const data = await fetch('/.netlify/functions/index')
            .then((response => {
                    if (response.ok) {
                        return response.json();
                    } else if (!response.ok) {
                        console.log(response)
                    }
                }))
                .catch((err) => console.error(err))
    console.log(data)
}
        fetchInsta();
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
        // var feed = new Instafeed({
        //     accessToken: `${process.env.DEMO_TOKEN_ONE}`
        // });
        // feed.run();
        // console.log(feed)

        INSTAGRAM_ACCESS_TOKEN = "IGQVJXZATJabHVzSWlYRTJpektYVWpaelVPdWIxRDJ2OUFkeDNNSmdIOEpXUURCbkhWYWIzX1d0YkkzanlLeVNIY0RjeXRiLUFNR2ktQnRnVGhNU252Ql9IRkZAGQnV1RzFUMXNla2M1QWhWLVBtS1FvdwZDZD"
        // // Color theme toggle
        // const themeToggle = document.querySelector('.theme-toggle');
        // const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
        // const currentTheme = localStorage.getItem('theme');

        // if (currentTheme == 'dark') {
        //     document.body.classList.toggle('dark-mode')
        // }

        // themeToggle.addEventListener('click', () => {
        //     if (prefersDarkTheme.matches) {
        //         document.body.classList.toggle('light-mode')
        //         var theme = document.body.classList.contains('light-mode') ? 'light' : 'dark'
        //     } else {
        //         document.body.classList.toggle('dark-mode');
        //         var theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light'
        //     }
        //     localStorage.setItem('theme', theme)
        // })