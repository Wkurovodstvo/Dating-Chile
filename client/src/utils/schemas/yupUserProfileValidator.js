const yup = require('yup');

const schemeYup = yup.object().shape({
    firstName: yup
        .string()
        .required('Empty firstname field!'),
    lastName: yup
        .string()
        .required('Empty lastname field!'),
    displayName: yup
        .string()
        .required('Empty displayname field!')
});

export default schemeYup;