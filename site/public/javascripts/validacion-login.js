
const qs = (tag) => {
    return document.querySelector(tag)
}

let divErr = document.querySelector("#divError")

window.addEventListener("load", function() {


    let formulario = qs("form");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let errores = []

        let campoEmail = qs("#email");

        if(campoEmail.value === "") {
            errores.push("El campo de mail tiene que estar completo")

        };

        let campoPassword = qs("#password");

        if(campoPassword.value === "") {
            errores.push("El campo de contraseña tiene que estar completo")
        };

        if (errores.length > 0) {
            errores.map(error => {
                divErr.innerHTML += `<li>${error}</li>`
            })
        }


    })

})

