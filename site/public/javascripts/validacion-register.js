const qs = (tag) => {
    return document.querySelector(tag)
}

let divErr = document.querySelector("#divError")

window.addEventListener("load", function() {

    console.log("Se vinculó correctamente");

    let formulario = qs("form");

    const smallName = qs("small.js-name");
    const smallEmail = qs("small.js-email");
    const smallPassword1 = qs("small.js-password1");
    const smallPassword2 = qs("small.js-password2");
    const smallSexo = qs("small.js-sexo");
    const smallProvincia = qs("small.js-provincia");
    const smallImg = qs("small.js-img");


    const smallTitle = qs("small.js-mensajeError");
    const campoName = qs("#name");
    const campoEmail = qs("#email");
    const campoPassword1 = qs("#p1")
    const campoPassword2 = qs("#p2")
    const campoSexo = qs("#sexo")
    const campoProvincia = qs("#provincia")
    const campoImg = qs("#img")







    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let errores = []

        if(campoName.value === "") {
            errores.push("El campo nombre tiene que estar completo")
        }

        if(campoName.value.length <= 1 ) {
            errores.push("El nombre debe poseer al menos dos caracteres")
        }


        if(campoEmail.value === "") {
            errores.push("El mail tiene que estar completo")
        }


        if(campoPassword1.value === "") {
            errores.push("La contraseña tiene que estar completa")
        }

        if(campoPassword1.value.length <= 7 ) {
            errores.push("La contraseña debe poseer al menos ocho caracteres")
        }


        if(campoPassword2.value === "") {
            errores.push("La contraseña tiene que estar completa")
        }

        if(campoPassword2.value.length <= 7 ) {
            errores.push("La contraseña debe poseer al menos ocho caracteres")
        }

        if(campoPassword1.value !== campoPassword2.value) {
            errores.push("Ambas contraseñas deben ser iguales")
        }


        if(campoSexo.value === "") {
            errores.push("Ingrese su sexo porfavor")
        }


        if(campoProvincia.value === "") {
            errores.push("Ingrese provincia que habita")
        }

        
        if (errores.length > 0) {
            errores.map(error => {
                divErr.innerHTML += `<li>${error}</li>`
            })
        }

    })

    campoName.addEventListener("input", (e) => {
        if (e.target.value.length < 3) {
        campoName.classList.add("is-invalid")
        smallName.innerHTML = "error bish!"
        } else {
            campoName.classList.remove("is-invalid")
            campoName.classList.add("is-valid")
            smallName.innerHTML = ""
        }
    })
    

    campoEmail.addEventListener("input", (e) => {
        if (e.target.value.length < 3){
        campoEmail.classList.add("is-invalid")
        smallEmail.innerHTML = "error bish!"}
        else {
            campoEmail.classList.remove("is-invalid")
            campoEmail.classList.add("is-valid")
            smallEmail.innerHTML = ""
        }
    })

    campoPassword1.addEventListener("input", (e) => {


        const validatePass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,15}$/
        if(validatePass.test(e.target.value)){
            campoPassword1.classList.remove("is-invalid")
            campoPassword1.classList.add("is-valid")
            smallPassword1.innerHTML = ""
        } else {
            campoPassword1.classList.add("is-invalid")
            smallPassword1.innerHTML = "error bish!"}
        


    })

    campoPassword2.addEventListener("input", (e) => {
        if (e.target.value.length < 3) {
            smallPassword2.innerHTML = "error bish!"
            campoPassword2.classList.add("is-invalid")
        } else {
                campoPassword2.classList.remove("is-invalid")
                campoPassword2.classList.add("is-valid")
                smallPassword2.innerHTML = ""
            }

    })

    campoSexo.addEventListener("input", (e) => {
        if (e.target.value === "")
        campoSexo.classList.add("is-invalid")
        smallSexo.innerHTML = "error bish!"
    })

    campoProvincia.addEventListener("input", (e) => {
        if (e.target.value === "")
        campoProvincia.classList.add("is-invalid")
        smallProvincia.innerHTML = "error bish!"
    })


})

