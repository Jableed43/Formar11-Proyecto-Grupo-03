const qs = (e) => document.querySelector(e)

let creacionform = qs('.creacionform')
let screacionform = qs('.screacionform')
let title = qs('#title')
let stitle = qs('#stitle')
let description = qs('#description')
let sdescription = qs('#sdescription')
let images = qs('#images')
let simages = qs('#simages')
let category = qs('#category')
let scategory = qs('#scategory')
let subcategory = qs('#subcategory')
let ssubcategory = qs('#ssubcategory')
let price = qs('#price')
let sprice = qs('#sprice')
let calories = qs('#calories')
let scalories = qs('#scalories')
let totalfat = qs('#totalfat')
let stotalfat = qs('#stotalfat')
let carb = qs('#carb')
let scarb = qs('#scarb')
let protein = qs('#protein')
let sprotein = qs('#sprotein')
let transfat = qs('#transfat')
let stransfat = qs('#stransfat')
let saturatedfat = qs('#saturatedfat')
let ssaturatedfat = qs('#ssaturatedfat')
let cholesterol = qs('#cholesterol')
let scholesterol = qs('#scholesterol')
let sodium = qs('#sodium')
let ssodium = qs('#ssodium')
let sugars = qs('#sugars')
let ssugars = qs('#ssugars')
let fiber = qs('#fiber')
let sfiber = qs('#sfiber')

let extensiones = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
let soloNumeros = /^([0-9])*$/



title.addEventListener('blur', (titulo)=>{
    if(titulo.target.value ==''){
        title.classList.add('invalido')
        title.classList.remove('valido')
        stitle.innerHTML = ('El campo de título no puede estar vacío')
        title = false
    } else {
        title.classList.remove('invalido')
        title.classList.add('valido')
        stitle.innerHTML =('')
        title = true
    }
})

description.addEventListener('blur', (descripcion)=>{
    if(descripcion.target.value ==''){
        description.classList.add('invalido')
        description.classList.remove('valido')
        sdescription.innerHTML = ('El campo de descripción no puede estar vacío')
        description = false
    } else {
        description.classList.remove('invalido')
        description.classList.add('valido')
        sdescription.innerHTML =('')
        description = true
    }
})

category.addEventListener('blur', (categoria)=>{
    if(categoria.target.value ==''){
        category.classList.add('invalido')
        category.classList.remove('valido')
        scategory.innerHTML = ('El campo de categoría no puede estar vacío')
        category = false
    } else {
        category.classList.remove('invalido')
        category.classList.add('valido')
        scategory.innerHTML =('')
        category = true
    }
})

subcategory.addEventListener('blur', (subcategoria)=>{
    if(subcategoria.target.value ==''){
        subcategory.classList.add('invalido')
        subcategory.classList.remove('valido')
        ssubcategory.innerHTML = ('El campo de subcategoría no puede estar vacío')
        subcategory = false
    } else {
        subcategory.classList.remove('invalido')
        subcategory.classList.add('valido')
        ssubcategory.innerHTML =('')
        subcategory = true
    }
})

price.addEventListener('blur', (precio)=>{
    if(precio.target.value ==''){
        price.classList.add('invalido')
        price.classList.remove('valido')
        sprice.innerHTML = ('El campo de precio no puede estar vacío')
        price = false
    } else if (precio.target.value !== soloNumeros){
        price.classList.add('invalido')
        price.classList.remove('valido')
        sprice.innerHTML = ('El campo de precio sólo acepta números')
        price = false
    } else {
        price.classList.remove('invalido')
        price.classList.add('valido')
        sprice.innerHTML =('')
        price = true
    }
})

calories.addEventListener('blur', (calorias)=>{
    if(calorias.target.value ==''){
        calories.classList.add('invalido')
        calories.classList.remove('valido')
        scalories.innerHTML = ('El campo de calorías no puede estar vacío')
        calories = false
    } else if (calorias.target.value !== soloNumeros){
        calories.classList.add('invalido')
        calories.classList.remove('valido')
        scalories.innerHTML = ('El campo de calorías sólo acepta números')
        calories = false
    } else {
        calories.classList.remove('invalido')
        calories.classList.add('valido')
        scalories.innerHTML =('')
        calories = true
    }
})

totalfat.addEventListener('blur', (grasastotales)=>{
    if(grasastotales.target.value ==''){
        totalfat.classList.add('invalido')
        totalfat.classList.remove('valido')
        stotalfat.innerHTML = ('El campo de grasas totales no puede estar vacío')
        totalfat = false
    } else if (grasastotales.target.value !== soloNumeros){
        totalfat.classList.add('invalido')
        totalfat.classList.remove('valido')
        stotalfat.innerHTML = ('El campo de grasas totales sólo acepta números')
        totalfat = false
    } else {
        totalfat.classList.remove('invalido')
        totalfat.classList.add('valido')
        stotalfat.innerHTML =('')
        totalfat = true
    }
})

carb.addEventListener('blur', (carbohidratos)=>{
    if(carbohidratos.target.value ==''){
        carb.classList.add('invalido')
        carb.classList.remove('valido')
        scarb.innerHTML = ('El campo de carbohidratos no puede estar vacío')
        carb = false
    } else if (carbohidratos.target.value !== soloNumeros){
        carb.classList.add('invalido')
        carb.classList.remove('valido')
        scarb.innerHTML = ('El campo de carbohidratos sólo acepta números')
        carb = false
    } else {
        carb.classList.remove('invalido')
        carb.classList.add('valido')
        scarb.innerHTML =('')
        carb = true
    }
})

protein.addEventListener('blur', (proteinas)=>{
    if(proteinas.target.value ==''){
        protein.classList.add('invalido')
        protein.classList.remove('valido')
        sprotein.innerHTML = ('El campo de proteinas no puede estar vacío')
        protein = false
    } else if (proteinas.target.value !== soloNumeros){
        protein.classList.add('invalido')
        protein.classList.remove('valido')
        sprotein.innerHTML = ('El campo de proteinas sólo acepta números')
        protein = false
    } else {
        protein.classList.remove('invalido')
        protein.classList.add('valido')
        sprotein.innerHTML =('')
        protein = true
    }
})

transfat.addEventListener('blur', (grasastrasns)=>{
    if(grasastrasns.target.value ==''){
        transfat.classList.add('invalido')
        transfat.classList.remove('valido')
        stransfat.innerHTML = ('El campo de grasas trans no puede estar vacío')
        transfat = false
    } else if (grasastrasns.target.value !== soloNumeros){
        transfat.classList.add('invalido')
        transfat.classList.remove('valido')
        stransfat.innerHTML = ('El campo de grasas trans sólo acepta números')
        transfat = false
    } else {
        transfat.classList.remove('invalido')
        transfat.classList.add('valido')
        stransfat.innerHTML =('')
        transfat = true
    }
})

saturatedfat.addEventListener('blur', (grasassaturadas)=>{
    if(grasassaturadas.target.value ==''){
        saturatedfat.classList.add('invalido')
        saturatedfat.classList.remove('valido')
        ssaturatedfat.innerHTML = ('El campo de grasas saturadas no puede estar vacío')
        saturatedfat = false
    } else if (grasassaturadas.target.value !== soloNumeros){
        saturatedfat.classList.add('invalido')
        saturatedfat.classList.remove('valido')
        ssaturatedfat.innerHTML = ('El campo de grasas saturadas sólo acepta números')
        saturatedfat = false
    } else {
        saturatedfat.classList.remove('invalido')
        saturatedfat.classList.add('valido')
        ssaturatedfat.innerHTML =('')
        saturatedfat = true
    }
})

cholesterol.addEventListener('blur', (sodio)=>{
    if(colesterol.target.value ==''){
        cholesterol.classList.add('invalido')
        cholesterol.classList.remove('valido')
        scholesterol.innerHTML = ('El campo de colesterol no puede estar vacío')
        cholesterol = false
    } else if (colesterol.target.value !== soloNumeros){
        cholesterol.classList.add('invalido')
        cholesterol.classList.remove('valido')
        scholesterol.innerHTML = ('El campo de colesterol sólo acepta números')
        cholesterol = false
    } else {
        cholesterol.classList.remove('invalido')
        cholesterol.classList.add('valido')
        scholesterol.innerHTML =('')
        cholesterol = true
    }
})

sodium.addEventListener('blur', (sodio)=>{
    if(sodio.target.value ==''){
        sodium.classList.add('invalido')
        sodium.classList.remove('valido')
        ssodium.innerHTML = ('El campo de sodio no puede estar vacío')
        sodium = false
    } else if (sodio.target.value !== soloNumeros){
        sodium.classList.add('invalido')
        sodium.classList.remove('valido')
        ssodium.innerHTML = ('El campo de sodio sólo acepta números')
        sodium = false
    } else {
        sodium.classList.remove('invalido')
        sodium.classList.add('valido')
        ssodium.innerHTML =('')
        sodium = true
    }
})

sugars.addEventListener('blur', (azucares)=>{
    if(azucares.target.value ==''){
        sugars.classList.add('invalido')
        sugars.classList.remove('valido')
        ssugars.innerHTML = ('El campo de azucares no puede estar vacío')
        sugars = false
    } else if (azucares.target.value !== soloNumeros){
        sugars.classList.add('invalido')
        sugars.classList.remove('valido')
        ssugars.innerHTML = ('El campo de azucares sólo acepta números')
        sugars = false
    } else {
        sugars.classList.remove('invalido')
        sugars.classList.add('valido')
        ssugars.innerHTML =('')
        sugars = true
    }
})

fiber.addEventListener('blur', (fibras)=>{
    if(fibras.target.value ==''){
        fiber.classList.add('invalido')
        fiber.classList.remove('valido')
        sfiber.innerHTML = ('El campo de fibras no puede estar vacío')
        fiber = false
    } else if (fibras.target.value !== soloNumeros){
        fiber.classList.add('invalido')
        fiber.classList.remove('valido')
        sfiber.innerHTML = ('El campo de fibras sólo acepta números')
        fiber = false
    } else {
        fiber.classList.remove('invalido')
        fiber.classList.add('valido')
        sfiber.innerHTML =('')
        fiber = true
    }
})

images.addEventListener('blur', function(){
    switch (true) {
        case images.value == "":
            simages.innerHTML = "Adjuntá una imagen del producto"
            images.classList.add('invalido')
        break
    default:
        images.classList.remove('invalido');
        images.classList.add('valido');
        simages.innerHTML = "";
    }
})

images.addEventListener('change', (imagenes)=> {
    if(imagenes.target.value !==extensiones){
            simages.innerHTML = "Solo imagenes con extension jpg, png, gif, webp"
            images.classList.add('invalido')
    } else {
            images.classList.remove('invalido');
            images.classList.add('valido');
            simages.innerHTML = "";
    }
})

creacionform.addEventListener('submit',(formulario)=>{

    if(!title || !description || !images || !price || !category || !subcategory || !calories || !totalfat || !carb || !protein || !transfat || !saturatedfat || !cholesterol || !sodium || !sugars || !fiber){
        formulario.preventDefault()
        screacionform.innerHTML = ('Corrija los errores señalados')
    }else{
        screacionform.innerHTML = ('')
        creacionform.submit()
    }
})