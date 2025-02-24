const modal = document.querySelector("#factModal");

const moreFactsButton = document.querySelector("#click");

const closeModel = document.querySelector(".close-modal")

const modalTitle = document.querySelector("#modalTitle")

const modalText = document.querySelector("#modalContent")

const moreInfo = document.querySelectorAll(".more-info")

const catFacts = document.querySelectorAll("p")



moreFactsButton.addEventListener("click", () => {
    modal.className = "modalShown";
    modalTitle.innerText = "more facts soon now leave me alone";
    modalText.innerText = "We currently do not have any more facts. Our engineer staff is working hard to provide more relevant fun facts."
});
closeModel.addEventListener("click", () =>{modal.className = "modal"})


moreInfo.forEach(button = () => {
    button.addEventListener("click", () => { modal.className = "modalShown"
    const factContent = event.target.parentNode
    const title = factContent.querySelector("h2").textContent;
    const text = factContent.querySelector("p").textContent;

    modalTitle.textContent = title;
    modalText.textContent =text;

    });
});

fetch("https://catfact.ninja/fact")
    .then(response =>{
        return response.json();
    })
    .then(dataAsJSON =>{
        console.log(dataAsJSON);
        //We can work with the data as JSON in here
        alert(dataAsJSON.fact)
        catFacts.forEach()
    });



