import {PASSWORD_LENGTH} from "../../constants/constants";
const yup = require('yup');

const schemeYup = yup.object().shape({
    currentPassword: yup
        .string()
        .required("Empty current password field!"),
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
        ),
    confirmPassword: yup
        .string()
        .required('Confirm password should not be empty!')
        .test('Password compare', 'Confirm password should be the same as password!',
            function (value) {
                const { password } = this.parent;
                return value === password;
            }
        )
});

export default schemeYup;