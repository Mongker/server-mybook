
// model
const Slider = require('../model/slider.model');

module.exports = {
    GET: async function (req, res) {
        await Slider.find(function (err, data) {
            if (err) return res.status(404).json({ message: err })
            else {
                const objectData = {};
                data.map((item)=> {
                    objectData[item._id] = item;
                });
                console.log(objectData);
                return res.status(200).json(objectData)
            }
        })
    },
    POST:async function (req, res) {
        console.log(req.body);
        // req.body.created = now;
       await Slider(req.body).save().then((slider) => { res.json({ message: 'SUCCESS' }) }).catch((err) => { res.status(500).json({ message: 'error' }) })
    },
    DELETE:async function (req, res) {
        await Slider.findByIdAndRemove({_id: req.params.id}, function(err, Product){
            if(err) res.json(err);
            else res.json({ message: 'SUCCESS'});
        });
    },
    UPDATE:async function (req, res) {
        await Slider.findById(req.params.id, function(err, Slider) {
            if (!Slider)
                res.status(404).send("data is not found");
            else {
                console.log('update: '+req);
                Slider.name = req.body.name;
                Slider.image_link = req.body.image_link;
                Slider.index = req.body.index;
                console.log(Slider);
                Slider.save().then(business => {
                    res.json({ message: 'SUCCESS'});
                })
                    .catch(err => {
                        res.status(400).send({message: 'Failed to update Product'});
                    });
            }
        });
    }
}
