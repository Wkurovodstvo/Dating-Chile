import {YEAR_OFFSET, YEAR_LIMIT, FIRST_DAY, LAST_DAY} from "../constants/constants";

export class DateGenerator {

    mapValues = (min, max) => {
        const values = [''];
        for (let i = max; i > min; i--) {
            values.push(i);
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