import moment from "moment";
import _ from "lodash";

export const getComparedDates = (pattern, start, end) => {

    const startMoment = moment(start, pattern);
    const endMoment = moment(end, pattern);

    return startMoment.from(endMoment);

};

export const formatDate = (pattern, date) => {

    return moment(date).format(pattern);

};

export const getTimeDifference = (pattern, start, end) => {

    const startMoment = moment(start, pattern);
    const endMoment = moment(end, pattern);

    const diff = moment.duration(endMoment.diff(startMoment)).abs();

    return `${diff.months()} month(s) ${diff.days()} day(s) ${diff.hours()} hour(s) ${diff.minutes()} minute(s)`;

};

export const dialogSnapshotTimeCalculator = (date) => {

    const nowMoment = moment();
    const dateMoment = moment(date);

    const difference = nowMoment.diff(dateMoment, 'days');

    if(_.isEqual(difference, 0)) {
        return moment(dateMoment).format("HH:mm");
    } else if(difference > 0 && difference < 7) {
        return moment(dateMoment).format("ddd");
    } else {
        return moment(dateMoment).format("DD MMM");
    }

};

export const dialogOnlineTimeCalculator = (date) => {

    const nowMoment = moment();
    const dateMoment = moment(date);

    const minutesDifference = nowMoment.diff(dateMoment, 'minutes');

    if(minutesDifference < 1) {
        return `last seen recently`;
    }

    const daysDifference = nowMoment.diff(dateMoment, 'days');

    if(_.isEqual(daysDifference, 0)) {
        return `last seen at ${moment(dateMoment).format("HH:mm")}`;
    } else if(_.isEqual(daysDifference, 1)) {
        return `last seen yesterday at ${moment(dateMoment).format("HH:mm")}`;
    } else {
        return `last seen ${moment(dateMoment).format("MMM DD")} at ${moment(dateMoment).format("HH:mm")}`;
    }

};

