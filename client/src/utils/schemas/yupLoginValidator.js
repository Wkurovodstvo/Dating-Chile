import {PASSWORD_LENGTH} from "../../constants/constants";

const yup = require('yup');


const schemeYup = yup.object().shape({
    email: yup
        .string()
        .email('Invalid email structure!')
        .required('Empty email field!'),
    password: yup
        .string()
        .required('Empty password field!')
        .test('len', `Password should be more than ${PASSWORD_LENGTH} characters!`,
            (val) => {
                if(val){
                    return val.length > PASSWORD_LENGTH;
                }
                else{
                    return true;
                }
            }
        )
});

export default schemeYup;