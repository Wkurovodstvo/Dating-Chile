import {PASSWORD_LENGTH} from "../../constants/constants";
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
        .required('Empty displayname field!'),
    email: yup
        .string()
        .required('Empty email field!')
        .email('Invalid email structure!'),
    role: yup
        .string()
        .required('Select role!')
        .oneOf(['Customer', 'Creative']),
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
        ),
    confirmPassword: yup
        .string()
        .required('Empty confirm password field!')
        .oneOf([yup.ref('password')], 'Passwords does not match!')
});

export default schemeYup;