/* modais */
let botaoSV = document.querySelectorAll(".botao-sv");
let closeMD = document.querySelectorAll(".md-close");

botaoSV.forEach(function(btn){
    btn.onclick = function(){
        let modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = 'flex';
    };
});

closeMD.forEach(function(btn){
    btn.onclick = function(){
        let modal = btn.closest('.modal-type').style.display = 'none';
    };
});

/* slider banner */
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
});