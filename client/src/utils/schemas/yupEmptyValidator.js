const yup = require('yup');


const schemeYup = yup.object().shape({
    field: yup
        .string()
        .required('Field should not be empty!')
});

export default schemeYup;