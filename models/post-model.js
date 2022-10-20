const {Schema, model} = require('mongoose');

const PostSchema = new Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    text: {type: String, required: true},
})

module.exports = model('Post', PostSchema);