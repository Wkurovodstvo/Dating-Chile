import _ from "lodash";

export const getEntryListAfterUpdate = (entries, entry) => {

    const entryIndex = _.findIndex(entries, ['id', entry.id]);
    entryIndex === -1
        ? entries.push(entry)
        : entries[entryIndex] = {...entries[entryIndex], ...entry};
    return entries;
};