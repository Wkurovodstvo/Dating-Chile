const yup = require('yup');

const schemeYup = yup.object().shape({
    region: yup
        .string()
        .required('Empty region field!'),
    ageRange: yup
        .string()
        .required('Empty age field!'),
    purpose: yup
        .string()
        .required('Empty purpose field!'),
    gender: yup
        .string()
        .required('Empty gender field!'),
});

export default schemeYup;