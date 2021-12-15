const qs = (tag) => {
    return document.querySelector(tag)
}

let divErr = document.querySelector("#divError")

window.addEventListener("load", function() {


    let formulario = qs("form");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let errores = []

        const campoName = qs("#name");

        if(campoName.value === "") {
            errores.push("El el nombre tiene que estar completo")
        }

        if(campoName.value.length <= 1 ) {
            errores.push("El nombre debe poseer al menos dos caracteres")
        }

        const campoEmail = qs("#email");

        if(campoEmail.value === "") {
            errores.push("El mail tiene que estar completo")
        }

        const campoPassword1 = qs("#p1")

        if(campoPassword1.value === "") {
            errores.push("La contraseña tiene que estar completa")
        }

        if(campoPassword1.value.length <= 7 ) {
            errores.push("La contraseña debe poseer al menos ocho caracteres")
        }

        const campoPassword2 = qs("#p2")

        if(campoPassword2.value === "") {
            errores.push("La contraseña tiene que estar completa")
        }

        if(campoPassword2.value.length <= 7 ) {
            errores.push("La contraseña debe poseer al menos ocho caracteres")
        }

        if(campoPassword2.value !== campoPassword1.value) {
            errores.push("Ambas contraseñas deben ser iguales")
        }

        const campoSexo = qs("#sexo")

        if(campoSexo.value === "") {
            errores.push("Ingrese su sexo porfavor")
        }

        const campoProvincia = qs("#provincia")

        if(campoProvincia.value === "") {
            errores.push("Ingrese provincia que habita")
        }

        
            const campoImg = qs("#img")


        if (errores.length > 0) {
            errores.map(error => {
                divErr.innerHTML += `<li>${error}</li>`
            })
        }

    })

})

