const qs = (tag) => {
    return document.querySelector(tag)
}

const divErr = document.querySelector(".errores ul")

window.addEventListener("load", function() {


    let formulario = qs("form");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let errores = []

        const campoEmail = qs("#user");

        if(campoEmail.value === "") {
            errores.push("El campo de nombre tiene que estar completo")
        }
        const campoPassword = qs("#password")

        if(campoPassword.value === "") {
            errores.push("El campo de contraseña tiene que estar completo")
        }


    })

})

