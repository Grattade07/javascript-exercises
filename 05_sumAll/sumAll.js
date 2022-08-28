const sumAll = function(start, end) {
    if (start < 0 || end < 0){
        return "ERROR";
    }
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }
if (start > end) {
    var temp = start;
    start = end;
    end = temp;
} 
    let finalSum = 0;

 for (let i = start; i <= end; i++) {
    finalSum += i;
 }

 return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
