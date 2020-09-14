
// model
const Product = require('../model/product.model');

module.exports = {
    GET: async function (req, res) {
        await Product.find(function (err, data) {
            if (err) return res.status(404).json({ message: err })
            else return res.status(200).json(data);
        })
    },
    POST:async function (req, res) {
        console.log(req.body);
        // req.body.created = now;
       const product = await Product(req.body).save().then((product) => { res.json({ message: 'successfully' }) }).catch((err) => { res.status(500).json({ message: 'error' }) })
    },
    DELETE:async function (req, res) {
        await Product.findByIdAndRemove({_id: req.params.id}, function(err, Product){
            if(err) res.json(err);
            else res.json({ message: 'Successfully removed'});
        });
    },
    UPDATE:async function (req, res) {
        await Product.findById(req.params.id, function(err, Product) {
            if (!Product)
                res.status(404).send("data is not found");
            else {
                Product.name = req.body.name;
                Product.description = req.body.description;
                Product.hasProducts = req.body.hasProducts;
                Product.amount = req.body.amount;
                console.log(Product);
                Product.save().then(business => {
                    res.json({ message: 'Successfully update'});
                })
                    .catch(err => {
                        res.status(400).send({message: 'Failed to update Product'});
                    });
            }
        });
    }
}