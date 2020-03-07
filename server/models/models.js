const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema
({
    name: {type:String, required:true, minlength:3},
    type: {type:String, required:true, minlength:3},
    description: {type:String, required:true, minlength:3},
    skills:[],
    likes:Number,
}, { timestamps: true })

const Pet = mongoose.model('pets', PetSchema);

module.exports = {
    Pet: Pet,
}