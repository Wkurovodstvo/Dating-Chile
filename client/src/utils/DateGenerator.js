import {YEAR_OFFSET, YEAR_LIMIT, FIRST_DAY, LAST_DAY} from "../constants/constants";
import _ from "lodash";

const pad = (number) => {

    return (_.isEqual(number.length, 1) ? '0' : '') + number;

};

export class DateGenerator {

    mapValues = (min, max) => {
        const values = [{value: ''}];
        for (let i = max; i > min; i--) {
            values.push({value: pad(`${i}`)});
        }
        return values;
    };

    generateYears = () => {
        const max = new Date().getFullYear() - YEAR_OFFSET;
        const min = max - YEAR_LIMIT;
        return this.mapValues(min, max);
    };

    generateDays = () => {
        return this.mapValues(FIRST_DAY, LAST_DAY);
    };

}