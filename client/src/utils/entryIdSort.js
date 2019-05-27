export default function (firstEntry, secondEntry) {
    if(firstEntry.id > secondEntry.id){
        return 1;
    }
    else if(firstEntry.id < secondEntry.id){
        return -1;
    }
    else return 0;
}