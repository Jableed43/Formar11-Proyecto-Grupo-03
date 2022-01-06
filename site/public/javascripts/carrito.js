console.log('cart.js connected success');

const $ = (id) => document.getElementById(id);

const boxProducts = $('box-products');
const spanTotal = $('span-total');
const spanCantidad = $('span-cantidad');
const spanCantidadCarrito = $('span-cantidad-cart');
const boxCart = $('box-cart');
const cartEmpty = $('cart-empty');

const mostrarCantidad = (carrito) => {
    let amount = 0;
    let total = 0;

    if(carrito){
        carrito.forEach(item => {
            amount += +item.amount
            total += +item.total
        })
    }

    spanCantidadCarrito.innerHTML = amount

    if(spanCantidad){
        spanCantidad.innerHTML = amount;
        spanTotal.innerHTML = `<span>$</span> <span class="float-end">${total}</span>`

    }
}


const cargarTabla = (carrito) => {


    if(boxCart){
        if(carrito.length === 0 ){
            boxCart.style.display = 'none';
            cartEmpty.style.display = 'block';
        }else{
            boxCart.style.display = 'block';
            cartEmpty.style.display = 'none';
        }
    
    }


    if(boxProducts){
    boxProducts.innerHTML = null;

    carrito.forEach(product => {
        boxProducts.innerHTML += `

        <div class="product">
            <img src="/images/imgmenu/${product.images}">
            <div class="product-info">
                <h3 class="product-name">${product.title}</h3>
                <h4 class="product-price">$ ${product.price}</h4>
            </div>
            <div>
                <p class="product-quantity">Cantidad: 
                <button class="btn btn-sm btn-danger" onClick="removeItem(event,${product.id})" ><i class="fas fa-minus"></i></button>
                <span>${product.amount}</span>
                <button class="btn btn-sm btn-success" onClick="addItem(event,${product.id})"><i class="fas fa-plus"></i></button>

                </p>
                <p class="product-remove" onClick="removeTotalItem(event,${product.id})">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                    <span class="remove" >Borrar</span>
                </p>
            </div>
        
        </div>
        `
    })
}
}

const getCarrito = async () => {
    try {

        let response = await fetch('/cart/show');
        let result = await response.json();

        mostrarCantidad(result.data);



         
            cargarTabla(result.data);
           

        

    } catch (error) {
        console.error(error)
    }
}

const addItem = async (e, id) => {
    e.preventDefault()
    
    try {
        
        let response = await fetch('/cart/add/' + id);
        let result = await response.json();
        
        cargarTabla(result.data);
        mostrarCantidad(result.data);


    } catch (error) {
        console.error(error)

    }
}

const removeItem = async (e, id) => {
    e.preventDefault()

    try {
        
        let response = await fetch('/cart/remove/' + id);
        let result = await response.json();

        console.log(result);

        cargarTabla(result.data);
        mostrarCantidad(result.data);

    } catch (error) {
        console.error(error)

    }
}

const removeTotalItem = async (e, id) => {
    e.preventDefault()

    try {
        
        let response = await fetch('/cart/removetotalitem/' + id);
        let result = await response.json();

        cargarTabla(result.data);
        mostrarCantidad(result.data);

    } catch (error) {
        console.error(error)

    }
}
getCarrito()