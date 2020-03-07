const collections = require('../models/models');

const Pet=collections.Pet;

module.exports = 
{
    getAll: function(req, res)
    {
        Pet.find().sort({type: 1})
            
            .catch(err => res.json({ status: 'Error', message: err }));  
    },
    getOne: function(req, res)
    {
        Pet.findOne({_id: req.params.id})
            .then(data => res.json({status: 'success', data:data}))
            .catch(err => res.json({ status: 'Error', message: err }));  
    },
    post: function(req, res)
    {
        Pet.findOne({name: req.body.name})
            .then(pet => 
            {
                if(pet != null)
                {
                    res.json({status: 'Pet already exists'})
                }
                else
                {
                    Pet.create(req.body)
                    .then(pet => res.json({status: 'success', pet:pet}))
                    .catch(err => res.json({ status: 'Error', message: err }));
                }
            })
            .catch(err => res.json({ status: "Error", message: err }));       
    }, 
    update: function(req, res)
    {
        Pet.updateOne({_id: req.params.id}, { $set: req.body })
            .then(data => res.json({status: 'success', data:data}))
            .catch(err => res.json({ status: 'Error', message: err }));  
    },
    delete: function(req, res)
    {
        Pet.remove({_id: req.params.id})
            .then(data => res.json({status: 'success', data:data}))
            .catch(err => res.json({ status: 'Error', message: err }));  
    },
    like: function(req, res)
    {
        Pet.updateOne({_id: req.params.id}, { $inc: {likes: 1} })
            .then(data => res.json({status: 'success', data:data}))
            .catch(err => res.json({ status: 'Error', message: err }));  
    },
};