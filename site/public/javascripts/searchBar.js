console.log('linkeado correctamente');

const $$ = id => document.getElementById(id);

$$('busqueda').addEventListener('click', e => {
    
    e.preventDefault();
    $$('busqueda').elements[0].value!='' && $$('busqueda').submit()
})