
const qs = (tag) => {
    return document.querySelector(tag)
}

let divErr = document.querySelector("#divError")

const inputs = document.querySelectorAll("input")

window.addEventListener("load", function() {


    let formulario = qs("form");



    const smallEmail = qs("small.js-email");
    const smallPassword = qs("small.js-password");

    let campoEmail = qs("#email");
    let campoPassword = qs("#password");


    campoEmail.addEventListener("input", (e) => {
        if (e.target.value.length < 3){
        campoEmail.classList.add("is-invalid")
        smallEmail.innerHTML = "El campo email debe estar completo"}
        else {
            campoEmail.classList.remove("is-invalid")
            campoEmail.classList.add("is-valid")
            smallEmail.innerHTML = ""
        }
    })


    campoPassword.addEventListener("input", (e) => {


        if(e.target.value.length === ""){
            campoPassword.classList.add("is-invalid")
            smallPassword.innerHTML = "El campo contraseña debe estar completo"
        } else {
            campoPassword.classList.remove("is-invalid")
            campoPassword.classList.add("is-valid")

            smallPassword.innerHTML = ""}
        
    })





    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === "") {
                inputs[i].classList.add("is-invalid")
            } else if (inputs[i].classList.contains("is-invalid")){
                inputs[i].classList.remove("is-invalid")
            }
    
        }

        let errores = []


        if(campoEmail.value === "") {
            errores.push("El campo de mail tiene que estar completo")

        };


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

