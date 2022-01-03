const qs = (tag) => {
    return document.querySelector(tag)
}

let divErr = document.querySelector("#divError")

window.addEventListener("load", function() {

    console.log("Se vinculó correctamente");

    let formulario = qs("form");

    const smallName = qs("small.js-name");
    const smallEmail = qs("small.js-email");
    const smallPassword = qs("small.js-password");
    const smallPassword2 = qs("small.js-password2");
    const smallSexo = qs("small.js-sexo");
    const smallProvincia = qs("small.js-provincia");
    const smallImg = qs("small.js-img");


    const smallTitle = qs("small.js-mensajeError");
    const campoName = qs("#name");
    const campoEmail = qs("#email");
    const campoPassword1 = qs("#password")
    const campoPassword2 = qs("#p2")
    const campoSexo = qs("#sexo")
    const campoProvincia = qs("#provincia")
    const campoImg = qs("#img")



    campoName.addEventListener("input", (e) => {
        if (e.target.value.length < 2) {
        campoName.classList.add("is-invalid")
        smallName.innerHTML = "El campo nombre debe estar completo"
        } else {
            campoName.classList.remove("is-invalid")
            campoName.classList.add("is-valid")
            smallName.innerHTML = ""
        }
    })
    

    campoEmail.addEventListener("input", (e) => {
        if (e.target.value.length < 2){
        campoEmail.classList.add("is-invalid")
        smallEmail.innerHTML = "El campo email debe estar completo"}
        else {
            campoEmail.classList.remove("is-invalid")
            campoEmail.classList.add("is-valid")
            smallEmail.innerHTML = ""
        }
    })

    const validatePass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,15}$/


    campoPassword1.addEventListener("input", (e) => {


        if(validatePass.test(e.target.value)){
            campoPassword1.classList.remove("is-invalid")
            campoPassword1.classList.add("is-valid")
            smallPassword.innerHTML = ""
        } else {
            campoPassword1.classList.add("is-invalid")
            smallPassword.innerHTML = "La contraseña debe contener una mayúscula, una minúscula, un número y entre 8 y 15 caracteres"}
        
    })

    campoPassword2.addEventListener("input", (e) => {

        if(validatePass.test(e.target.value)){
            campoPassword2.classList.remove("is-invalid")
            campoPassword2.classList.add("is-valid")
            smallPassword2.innerHTML = ""
        } else {
            campoPassword2.classList.add("is-invalid")
            smallPassword2.innerHTML = "La contraseña debe contener una mayúscula, una minúscula, un número y entre 8 y 15 caracteres"}
        
    })


    campoImg.addEventListener('change', (e)=> {

        let extensiones = /(.jpg|.jpeg|.png|.gif|.webp)$/i.test(campoImg.value);

        if(!extensiones){
            smallImg.innerHTML = "Solo imagenes con extension jpg, png, gif, webp"
            campoImg.classList.add("is-invalid")
        } else {
            campoImg.classList.remove("is-invalid");
            campoImg.classList.add("is-valid");
            smallImg.innerHTML = "";
        }
    })


    formulario.addEventListener("submit", function(e) {

        let errores = []


        if(campoPassword1.value !== campoPassword2.value) {
            errores.push("Ambas contraseñas deben ser iguales")
        }


        if(campoSexo.value === "") {
            errores.push("Ingrese su sexo porfavor")
            campoSexo.classList.add("is-invalid")
            smallSexo.innerHTML = "El campo sexo debe estar completo"
        }


        if(campoProvincia.value === "") {
            errores.push("Ingrese provincia que habita")
            campoProvincia.classList.add("is-invalid")
            smallProvincia.innerHTML = "El campo provincia debe estar completo"
        }

        
        if (errores.length > 0) {
            errores.map(error => {
                divErr.innerHTML += `<li>${error}</li>`
            })
        }

    })

    


})

