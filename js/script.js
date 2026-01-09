/* console.log("funziona tutto");
 */

//seleziono come prima cosa il contenitore dove mettere le card
const outputCont = document.getElementById("container");
//seleziono output del overlay  
const outputOver = document.querySelector(".overlay-container");
//seleziono img di overlay
const overlayImg = document.querySelector(".overlay-img");
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
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const image = card.querySelector(".img-container img")
            console.log(image.src);
            outputOver.style.display = "block"; // mostra overlay
            outputOver.innerHTML = `
            <button id="btn-close">Chiudi</button>
            <img src="${image.src}" alt="${image.alt}"></img>`
            //seleziono il btn nuovo
            const buttonClose = document.getElementById("btn-close");
            //add eventlistener su btn così da far cambiare di nuovo il display
            buttonClose.addEventListener("click", () => {
                
                outputOver.style.display = "none";
            })
            
        })
    })
})
.catch(err => console.log(err));


