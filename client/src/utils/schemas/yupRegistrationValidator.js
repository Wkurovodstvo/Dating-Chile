import {PASSWORD_LENGTH} from "../../constants/constants";
const yup = require('yup');

const schemeYup = yup.object().shape({
    year: yup
        .string()
        .required('Empty birth year field!'),
    month: yup
        .string()
        .required('Empty birth month field!'),
    day: yup
        .string()
        .required('Empty birth day field!'),
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
    email: yup
        .string()
        .required('Empty email field!')
        .email('Invalid email structure!'),
    nickname: yup
        .string()
        .required('Empty account name field!'),
});

export default schemeYup;