/* console.log("funziona tutto");
 */

//seleziono come prima cosa il contenitore dove mettere le card
const outputCont = document.getElementById("container");

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