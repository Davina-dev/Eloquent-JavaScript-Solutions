
let ListaCD=
[
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLI5_xFQd7qK3nY1gf6xVFPaOekvlYHNoqyQ&usqp=CAU",
        title:"💛  Intro",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLI5_xFQd7qK3nY1gf6xVFPaOekvlYHNoqyQ&usqp=CAU",
        title:"💛 2- variables",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLI5_xFQd7qK3nY1gf6xVFPaOekvlYHNoqyQ&usqp=CAU",
        title:"💛 3-Funciones",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLI5_xFQd7qK3nY1gf6xVFPaOekvlYHNoqyQ&usqp=CAU",
        title:"💛  4-Arrays",
    },
  
];
    



let DomCards= document.getElementById("DomCards");

function printCards(object){
    DomCards.innerHTML +=  `
                            
                            <div class="swiper-slide">
                            <img src="${object.img}" 
                            <div class="container-bnt"> <button class="btn">${object.title}</button> </div>
                            </div>
                            `
}





function loadCards(){
   ListaCD.forEach((object)=> printCards(object));
}

loadCards();





var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });