const yup = require('yup');

const schemeYup = yup.object().shape({
    amount: yup
        .number()
        .positive()
        .required('Empty amount field!')
});

module.exports = schemeYup;