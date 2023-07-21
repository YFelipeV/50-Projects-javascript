const acordion = document.querySelectorAll(".contentBx");



acordion.forEach((acor) => {
    acor.addEventListener("click", () => {
        acor.classList.toggle("active")
    })

})

// for (i = 0; i < acordion.length; i++) {
//     acordion[i].addEventListener("click", () => {
//         acordion[i].classList.toggle("active");
//     })

// }