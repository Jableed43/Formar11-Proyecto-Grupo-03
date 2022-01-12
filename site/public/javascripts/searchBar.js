console.log('linkeado correctamente');

const form = document.getElementById('form-busqueda');
const busqueda = document.getElementById('busqueda');
const btn = document.getElementById('btn-busqueda');

btn.addEventListener('click', e => {

    e.preventDefault();
    form.elements[0].value!='' && form.submit()
})
