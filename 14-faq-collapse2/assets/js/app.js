const box = document.querySelectorAll(".contextBox");

box.forEach((boxs) => {

    boxs.addEventListener('click', () => {

        boxs.classList.toggle("active");
    })
})