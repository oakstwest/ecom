module.exports = {

    create: async (req, res) => {
        const {
            category,
            title,
            description,
            price,
            item_num,
            img,
            main,
            product_id
        } = req.body;
    },

    getProducts: (req, res) => {
        const db = req.app.get('db')

        db.display()
            .then(resp => {
                res.status(200).send(resp)
            })
    },

    addProductToCart: (req, res) => {
        const db = req.app.get('db')
        const { product_id, quantity } = req.body;


        db.addProduct([product_id, quantity])
            .then(resp => {
                res.status(200).send(resp)
            })
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params

        db.deleteFromCart([id])
            .then((resp) => {
                res.status(200).send(resp)
            })
    },

    updateCart: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const {quantity} = req.body

        db.updateCart([quantity, id])
            .then((resp) => {
                res.status(200).send(resp)
            })
    },

    getCart: (req, res) => {
        const db = req.app.get('db')

        db.getCart()
            .then(resp => {
                res.status(200).send(resp)
            })
    },



}