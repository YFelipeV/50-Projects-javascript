const result = document.getElementById("result");
const jokerbtn = document.getElementById("joker");
const URLAPI = "https://icanhazdadjoke.com";

jokerbtn.addEventListener("click", generateJoke)
generateJoke();

async function generateJoke() {
    try {
        const response = await fetch(URLAPI, {
            headers: {
                Accept: "application/json",
            },
        });
        const data = await response.json();

        result.style.fontSize = "20px"
        result.innerText = data.joke; // Accede a la propiedad "joke" que contiene el texto del chiste
    } catch (error) {
        console.log(error);
    }
}