let header = document.querySelector("header");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let scrollPos = pageYOffset || document.documentElement.scrollTop;

    if (scrollPos > lastScrollTop) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

    console.log(scrollPos);
    lastScrollTop = scrollPos;
});