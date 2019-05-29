const yup = require('yup');
const {PASSWORD_LENGTH} = require('../utils/constants/constants');

const schemeYup = yup.object().shape({
    gender: yup
        .string()
        .required('Empty gender field!'),
    purpose: yup
        .string()
        .required('Empty purpose field!'),
    ageRange: yup
        .string()
        .required('Empty age field!'),
    region: yup
        .string()
        .required('Empty region field!'),
    nickName: yup
        .string()
        .required('Empty nickname field!'),
    email: yup
        .string()
        .required('Empty email field!')
        .email('Invalid email structure!'),
    role: yup
        .string()
        .required('Select role!')
        .oneOf(['User', 'Admin', 'Moderator']),
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