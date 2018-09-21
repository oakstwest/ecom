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



    updateProduct: (req, res) => {
        const {
            products_id
        } = req.params
        const {
            category,
            title,
            description,
            price
        } = req.body
        req.app.get('db').products.update_products([category, title, description, price, product_id])
            .then(() => {
                res.sendStatus(200)
            })
    },

    updateImage: (req, res) => {
        const {
            img_id
        } = req.params
        const {
            img,
            main
        } = req.body
        req.app.get('db').images.update_image([img, main, img_id])
            .then(() => {
                res.sendStatus(200)
            })
    },

    delete: (req, res) => {
        req.app.get('db').product.delete_product([req.params.product_id])
            .then(() => {
                res.sendStatus(200)
            })
    },

    deleteImage: (req, res) => {
        req.app.get('db').images.delete_images([req.params.img_id])
            .then(() => {
                res.sendStatus(200)
            })
    },








}