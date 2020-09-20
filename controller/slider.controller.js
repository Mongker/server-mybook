
// model
const Slider = require('../model/slider.model');

module.exports = {
    GET: async function (req, res) {
        await Slider.find(function (err, data) {
            if (err) return res.status(404).json({ message: err })
            else return res.status(200).json(data);
        })
    },
    POST:async function (req, res) {
        console.log(req.body);
        // req.body.created = now;
       const product = await Slider(req.body).save().then((product) => { res.json({ message: 'successfully' }) }).catch((err) => { res.status(500).json({ message: 'error' }) })
    },
    DELETE:async function (req, res) {
        await Slider.findByIdAndRemove({_id: req.params.id}, function(err, Product){
            if(err) res.json(err);
            else res.json({ message: 'Successfully removed'});
        });
    },
    UPDATE:async function (req, res) {
        await Slider.findById(req.params.id, function(err, Slider) {
            if (!Slider)
                res.status(404).send("data is not found");
            else {
                Slider.name = req.body.name;
                Slider.image_link = req.body.image_link;
                Slider.index = req.body.index;
                console.log(Slider);
                Slider.save().then(business => {
                    res.json({ message: 'Successfully update'});
                })
                    .catch(err => {
                        res.status(400).send({message: 'Failed to update Product'});
                    });
            }
        });
    }
}