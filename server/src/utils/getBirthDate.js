import moment from "moment";

module.exports.getBirthDate = (day, month, year) => {

    const dateString = `${year}-${month}-${day}`;
    const birthDate = moment(dateString, "YYYY/MM/DD");
    return  moment(birthDate).format('DD-MM-YYYY');

};