/* console.log("funziona tutto");
 */

//seleziono come prima cosa il contenitore dove mettere le card
const outputCont = document.getElementById("container");
//seleziono output del overlay  
const outputOver  = document.querySelector(".overlay-container");
//seleziono il btn
const button = document.getElementById("btn-close");

// endpoint API delle immagini
const endpoint = "https://lanciweb.github.io/demo/api/pictures/"

//creo la chiamata ajax all'endpoint

axios.get(endpoint)
    .then(response => {
        const pictures = response.data;

        //inizializzo una stringa vuota che mi faccia da contenitore per l'html
        let picturesOutput = "";

        //ciclo l'array di oggetti
        pictures.forEach((pic, index) => {
            const { title, date, url } = pic //prendo solo titolo e data

            //accumulo nuove card all'html

            picturesOutput += `
            <div class="card">
                <img src="./img/pin.svg" alt="red-pin" class="pin">
                <div class="img-container">
                    <img src="${url}" alt="${title}">
                </div>
                <p><strong>${title}</strong></p>
                <p>${date}</p>
            </div>`;

            console.log("iterazione", index);
        });

        outputCont.innerHTML = picturesOutput;
    })
    .catch(err => console.log(err));

 //add event listener a outputCont cosicché quando user clicca sulle img fa vedere l'overlay

outputCont.addEventListener("click", () => {
outputOver.style.display = "block"; // mostra overlay
});

//add eventlistener su btn così da far cambiare di nuovo il display

button.addEventListener("click",() => {
    outputOver.style.display = "none";
})