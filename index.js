// code your solution here
const superbowlWin = (record) => {
    for (const item of record) {
        if(item.result === "W"){
        return item.year;
        }

    }
}