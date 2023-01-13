const button_marcar = document.querySelector(".button_marcar");
const containerPrincipal = document.querySelector(".containerPrincipal");
const input_titleNota = document.querySelector(".input_titleNota")
const input_nota = document.querySelector(".input_nota");

function Create() {
    const element = document.createElement("div");
    const imgArrowdown = document.createElement("img");
    const titleOfElement = document.createElement("p");
    const textOfElement = document.createElement("h1");
    const divitems = document.createElement("div");

    divitems.setAttribute("class", "divitems");
    imgArrowdown.src="arrowimg.png"
    element.appendChild(divitems)

    titleOfElement.setAttribute("class", "titleOfElement");
    titleOfElement.innerHTML = input_titleNota.value;
    textOfElement.innerHTML = input_nota.value;

    imgArrowdown.setAttribute("class", "arrowdown");
    imgArrowdown.addEventListener("click", () => {

        textOfElement.style.display = "block";
        textOfElement.style.fontSize = "1em";
        textOfElement.style.marginLeft = "1.2em";
        textOfElement.style.marginBottom = "0.7em";
        element.style.height = "max-content";

        if(element.classList.contains("fechardiv")) {
            element.style.height = "3em"
            textOfElement.style.display = "none";
            imgArrowdown.src="arrowimg.png"
            element.classList.remove("fechardiv");
        } else {
            imgArrowdown.src="arrow-up.png"
            element.style.height = "max-content";
            element.classList.add("fechardiv");
        }
    })
    textOfElement.setAttribute("class", "textOfElement");

    element.setAttribute("class", "element");

    divitems.appendChild(imgArrowdown)

    if(input_titleNota.value == '' || input_titleNota.value == undefined) {
        titleOfElement.innerHTML = "Nota sem nome";
    } else {
        titleOfElement.innerHTML = input_titleNota.value;
    }

    containerPrincipal.appendChild(element);
    divitems.appendChild(titleOfElement);
    element.appendChild(textOfElement);

}

button_marcar.addEventListener("click", () => {
    const i = document.getElementsByClassName("element");
    
    if(i.length < 5) {
        Create()
    } else {
        function ValidaQuant() {
            if(i.length == 5) {
                button_marcar.removeEventListener("click", arguments.callee)
            }
        }
        
        setInterval(ValidaQuant, 2000);
    }
});

const i = document.getElementsByClassName("element");
