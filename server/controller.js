module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')

        db.display()
            .then((resp) => {
                res.status(200).send(resp)
            })
    },

    addProductToCart: (req, res) => {
        const db = req.app.get('db')
        const { product_id, quantity } = req.body;


        db.addProduct([product_id, quantity])
            .then(() => {
                res.sendStatus(200)
            })
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const { cart_id } = req.params

        db.deleteFromCart([cart_id])
            .then((resp) => {
                res.status(200).send(resp)
            })
    },

    deleteAllCart: (req, res) => {
        const db = req.app.get('db')
        
        db.delete_all_cart()
            .then((resp) => {
                res.status(200).send(resp)
            })
    },

    updateCart: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { quantity } = req.body

        db.updateCart([quantity, id])
            .then(() => {
                res.sendStatus(200)
            })
    },

    getCart: async (req, res) => {
        const db = req.app.get('db')

        db.get_cart().then((resp) => {
            console.log(resp);

            res.status(200).send(resp)
        }).catch(err => {
            console.log(err)
        })
    }

}

