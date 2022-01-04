console.log('cart.js vinculado correctamente');

const $ = (id) => document.getElementById(id)

const boxProducts = $('box-products');

const cargarTabla = (carrito) => {
    
    boxProducts.innerHTML = null;

    carrito.forEach(product => {
        boxProducts.innerHTML += `
        <div class="product">
        <img src="/images/imgmenu/${product.image}">
        <div class="product-info">
            <h3 class="product-name">${product.title}</h3>
            <h4 class="product-price">$${product.price}</h4>
        </div>
            <div>
            <p class="product-quantity">Cantidad: <input value="${product.amount}" name=""></p>
            <p class="product-remove">
                <i class="fa fa-trash" aria-hidden="true"></i>
                <span class="remove">Borrar</span></p>
            </div>
        
    </div>
    ` 
    });
}

const getCarrito = async () => {
    try {
        let response = await fetch ('cart/show')
        let result = await response.json()

        console.log(result);

        if(result.data.length > 0) {
            cargarTabla(result.data)
        }

    } catch (error) {
        console.error(error);
    }
}

getCarrito()