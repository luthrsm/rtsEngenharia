//swiper testemonial

const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoHeight: true,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//swiper clientes

const controls = document.querySelectorAll(".control");
let currentClient = 0;
const clients = document.querySelectorAll(".client");
const maxClients = clients.length;

controls.forEach((control) => {
    control.addEventListener("click", (e) =>{
        isLeft = e.target.classList.contains("fa-chevron-left");

        if(isLeft){
            currentClient -= 1;
        } else{
            currentClient += 1;
        }

        if (currentClient >=maxClients){
            currentClient = 0;
        }

        if (currentClient < 0){
            currentClient = maxClients - 1;
        }

        clients.forEach((client) => client.classList.remove("current-client"));

        clients[currentClient].scrollIntoView({
            behavior: 'smooth',
            inline: 'center'
        });

        clients[currentClient].classList.add("current-client")
    })
})