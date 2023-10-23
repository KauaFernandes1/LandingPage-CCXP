const ingresso = [];

function addRedBorder(id)
{
    element = document.querySelector("#" + id);
    element.style.border = "5px solid red";

}
function addRedBorder(id) {
    element = document.querySelector("#" + id);
    element.style.border = "5px solid red";
}


function highlightCard(selector)
{
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}

function checkKeyboardCode()
{
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
    }, false)
}

document.addKeyboardEventListener(`keydown`, (event) => {

    var ingresso1 = document.getElementById("quinta");
    var ingresso2 = document.getElementById("sexta");
    var ingresso3 = document.getElementById("sabado");
    var ingresso4 = document.getElementById("domingo");
   
    var code = event.code;
    if(code == 'Digit1') {
        ingresso1.classList.toggle("card-highLight")
        ingresso2.classList.remove("card-highLight")
        ingresso3.classList.remove("card-highLight")
        ingresso4.classList.remove("card-highLight")

    }

    if(coce == "Digit2"){
        ingresso1.classList.remove("card-highLight")
        ingresso2.classList.toggle("card-highLight")
        ingresso3.classList.remove("card-highLight")
        ingresso4.classList.remove("card-highLight")
    }
    if(coce == "Digit3"){
        ingresso1.classList.remove("card-highLight")
        ingresso2.classList.remove("card-highLight")
        ingresso3.classList.toggle("card-highLight")
        ingresso4.classList.remove("card-highLight")
    }
    if(coce == "Digit4"){
        ingresso1.classList.remove("card-highLight")
        ingresso2.classList.remove("card-highLight")
        ingresso3.classList.remove("card-highLight")
        ingresso4.classList.toggle("card-highLight")
    }
}, false);

selectCard = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)) ingresso.pop(selector);
    else ingresso.push(selector)
}

showSelectedCards = () =>
{
    if(ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos);
}


addKeyboardEventListeners();



