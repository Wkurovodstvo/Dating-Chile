const yup = require('yup');
const {PASSWORD_LENGTH} = require('../utils/constants/constants');

const schemeYup = yup.object().shape({
    email: yup
        .string()
        .required('Empty email field!')
        .email('Invalid email structure!'),
    password: yup
        .string()
        .required('Empty password field!')
        .test('len', `Password should be more than ${PASSWORD_LENGTH} characters!`,
            (val) => {
                if(val){
                    return val.length > PASSWORD_LENGTH;
                }
                return true;
            }
        )
});

module.exports = schemeYup;