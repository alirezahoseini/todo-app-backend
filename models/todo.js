const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: {
        type: String,
        minLength: 3,
        maxLength: 100,
        required: true
    },
    discription:{
        type: String,
        minLength: 5,
        maxLength: 200,
        required: false
    }
});

const model = mongoose.models.Todo || mongoose.model("Todo",schema);

export default model