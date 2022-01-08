const getURL = req => `${req.protocol}://${req.get('host')}${req.originalUrl}`;

const db = require('../database/models');


const productVerify = (carrito,id) => {
    let index = -1;
    for (let i = 0; i < carrito.length; i++) {
        
        if(carrito[i].id == id){ 
            index = i;
            break
        }
    }
    return index
}


module.exports = {
    show : async (req,res) => {

        let response = {
            meta : {
                link : getURL(req)
            },
            data : req.session.cart
        } 
        return res.status(200).json(response)
    },
    add : async (req,res) => {
        try {

            let product = await db.Product.findByPk(req.params.id, {
                include : [{all : true}]
            })

            const {id, title, images, price} = product;

            let item = {
                id,
                title,
                images,
                price,
                subcategory : product.subcategories.name,
                amount : 1,
                total : +price,
            }
            if(req.session.cart.length === 0){

                let order = await db.Order.findOne({
                    where : {
                        id_client : req.session.userLogin.id,
                        status : 'pending'
                    }
                })

                if(!order){
                    order = await db.Order.create({
                        id_client : req.session.userLogin.id,
                        status : 'pending',
                        total : 0
                    })
                }

                item = {
                    ...item,
                    id_order : order.id
                }

                req.session.cart.push(item);

                await db.Cart.create({
                    id_users : req.session.userLogin.id,
                    id_products : item.id,
                    cantidad : item.amount,
                    id_order : item.id_order
                })

            }else{

                let index = productVerify(req.session.cart, req.params.id);
                let order = await db.Order.findOne({
                    where : {
                        id_client : req.session.userLogin.id,
                        status : 'pending'
                    }
                })

                if(index === -1){
                    
                    item = {
                        ...item,
                        id_order : order.id
                    }

                    req.session.cart.push(item);

                    await db.Cart.create({
                        id_users : req.session.userLogin.id,
                        id_products : item.id,
                        cantidad : item.amount,
                        id_order : item.id_order
                    })
                }else{

                    let product = req.session.cart[index];
                    product.amount++;
                    product.total = product.amount * +product.price;

                    req.session.cart[index] = product;

                    await db.Cart.update(
                        {
                            cantidad : product.amount
                        },
                        {
                            where : {
                                id_order : product.id_order,
                                id_products : product.id
                            }
                        }
                    )
                }
            }
            let response = {
                meta : {
                    link : getURL(req)
                },
                data : req.session.cart
            }
    
            return res.status(200).json(response)

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg: "Comuníquese con el administrador"
            })
        }
    },
    remove : async (req,res) => {
        try {

            let index = productVerify(req.session.cart, req.params.id);
            let product = req.session.cart[index];

            if(product.amount > 1){

                product.amount--;
                product.total = product.amount * product.price;
                req.session.cart[index] = product

                await db.Cart.update(
                    {
                        cantidad : product.amount
                    },
                    {
                        where : {
                            id_order : product.id_order,
                            id_products : product.id
                        }
                    }
                )
            }else{

                req.session.cart.splice(index, 1);

                await db.Cart.destroy({
                    where : {
                        id_order : product.id_order,
                        id_products : product.id
                    }
                })
            }

            let response = {
                meta : {
                    link : getURL(req)
                },
                data : req.session.cart
            }
    
            return res.status(200).json(response)

            
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg: "Comuníquese con el administrador"
            })
        }
    },
    removeTotalItem : async (req,res) => {
        try {

            let index = productVerify(req.session.cart, req.params.id);
            let product = req.session.cart[index];

                req.session.cart.splice(index, 1);

                await db.Cart.destroy({
                    where : {
                        id_order : product.id_order,
                        id_products : product.id
                    }
                })


            let response = {
                meta : {
                    link : getURL(req)
                },
                data : req.session.cart
            }
    
            return res.status(200).json(response)

            
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg: "Comuníquese con el administrador"
            })
        }
    },
    empty : async (req,res) => {
        try {

            req.session.cart = [];

            await db.Order.destroy({
                where : { 
                    id_client : req.session.userLogin.id,
                    status : 'pending'
                }
            })

            let response = {
                meta : {
                    link : getURL(req)
                },
                data : req.session.cart
            }
    
            return res.status(200).json(response)
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg: "Comuníquese con el administrador"
            })
        }
    }
}