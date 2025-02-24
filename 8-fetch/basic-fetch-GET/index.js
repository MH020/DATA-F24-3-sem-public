const pElement = document.createElement("p")
document.body.appendChild(pElement)

fetch("https://catfact.ninja/fact")
    .then(response =>{
        return response.json();
    })
    .then(dataAsJSON =>{
        console.log(dataAsJSON);
       // pElement.innerText = dataAsJSON.fact;

    });

fetch("https://catfact.ninja/facts")
    .then(response =>{
        return response.json();
    })
    .then(dataAsJSON =>{
        console.log(dataAsJSON);
        pElement.innerText = dataAsJSON.data[0].fact;

        for (let i = 0; i < dataAsJSON.data.length; i++) {
            let longestFact = 0;
            let index = 0;
            if  (dataAsJSON.data[i].length > longestFact){
                index = i;
            }
            pElement.innerText = dataAsJSON.data[index].fact;

        }


    });