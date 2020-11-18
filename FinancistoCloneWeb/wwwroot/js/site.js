//JAVASCRIPT

//buscar el primer elemento con el atributo id "link"
//console.log(document.getElementById("link"));

//buscar por etiquetas con el atributo tag name "a"
//console.log(document.getElementsByTagName("a"));

//buscar por el nombre de una clase en particular "link"
//console.log(document.getElementsByClassName("link"))


//buscar por selector css (etiquetas "a" que tengan la clase "link")
//console.log(document.querySelectorAll("a.link"));

//$('#link').click(function () {
//    alert("Holi loquitos itos");
//});


//function saludar() {
//    return "Hola Mundo";
//}
//console.log(saludar());






//JQUERY
//Ya no ingresa, solo muestra el alert
//forma 1 id="link"  class="link"

//var $link = $('#link');
//$link.click(function (event) {
// alert("HHHi");
//  event.preventDefault();
//});

//forma 2 id="link" onclick="saludar(event)" class="link"

//function saludar(e) {
//  alert("FFF");
//  e.preventDefault();
//}


//AJAX :v
//sincrono -> Yo espero a que termine cada ejecucion antes de terminar
//asincrono -> No espero para nada, yo invoco y sigo
function saludar(e) {

    console.log("Llamando request HTTP");

   var resp = $.ajax({ //invocar hacer peticiones http
        url: "https://localhost:44310/Account",
        type: "get"
    });

    resp.done(function (html) {




    })
    console.log("Prevenir default");
    e.preventDefault();
}