const yup = require('yup');


const schemeYup = yup.object().shape({
    balance: yup
        .string()
        .required('Empty balance field!')
        .test('Positive', 'Amount should be a positive number!',
            function (value) {
                return +value>0;
            }
        ),
    card: yup
        .string()
        .required('Empty card field!'),
});

export default schemeYup;