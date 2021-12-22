
const qs = (tag) => {
    return document.querySelector(tag)
}

let divErr = document.querySelector("#divError")

const inputs = document.querySelectorAll("input")

window.addEventListener("load", function() {
    console.log("Se vinculó correctamente");


    let formulario = qs("form");



    let smallEmail = qs(".js-email");
    let smallPassword = qs(".js-password");
    
    let campoPassword = qs("#password");
    let campoEmail = qs("#email");


    campoEmail.addEventListener("input", (e) => {
        if (e.target.value.length < 2){
        campoEmail.classList.add("is-invalid")
        smallEmail.innerHTML = "El campo email debe estar completo"
        e.preventDefault()
    }else {
            campoEmail.classList.remove("is-invalid")
            campoEmail.classList.add("is-valid")
            smallEmail.innerHTML = ""
        }
    })


    campoPassword.addEventListener("input", (e) => {
        if (e.target.value.length < 2) {
            campoPassword.classList.add("is-invalid")
            smallPassword.innerHTML = "El campo contraseña debe estar completo"
            e.preventDefault()
        } else {
            campoPassword.classList.remove("is-invalid")
            campoPassword.classList.add("is-valid")
            smallPassword.innerHTML = ""
        }
    })





    formulario.addEventListener("submit", function(e) {

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
            e.preventDefault()
            errores.map(error => {
                divErr.innerHTML += `<li>${error}</li>`
            })
        }


    })

})

