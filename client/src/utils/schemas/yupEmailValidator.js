const yup = require('yup');


const schemeYup = yup.object().shape({
    email: yup
        .string()
        .email('Invalid email structure!')
        .required('Empty email field!')
});

export default schemeYup;