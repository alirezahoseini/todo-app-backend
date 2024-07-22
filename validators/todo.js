const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
    title: {
        type: 'string',
        min: 3,
        max: 100,
        required: true
    },
    description:{
        type: 'string',
        min: 5,
        max: 200,
        required: false
    }
}

const validationResult = v.compile(schema);

export default validationResult