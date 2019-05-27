const yup = require('yup');


const schemeYup = yup.object().shape({
    tag: yup.string(),
    namingType: yup
        .string()
        .test(
            'NameType', 'Nametype should not be empty!',
            function(value) {
                const { tag } = this.parent;
                if(tag === "Name") {
                    if(value.length === 0 || value === "Select any") {
                        return false;
                    }
                }
                return true;
            }
        ),
    title: yup.string('Title should be a string!')
        .required('Empty title field!'),
    industry: yup.string('Industry should be a string!')
        .required('Empty industry field!'),
    venture: yup.string('Venture should be a string!')
        .required('Empty venture field!'),
    target: yup.string('Target should be a string!')
        .required('Empty target field!'),
    preference: yup.string('Preference should be a string!')
        .required('Empty preference field!')
        .test(
            'Preference', 'Preference should not be empty!',
            function(value) {
                return !(value === "Select any");
            }
        ),
    ventureName: yup.string('Venture name should be a string!')
});

export default schemeYup;