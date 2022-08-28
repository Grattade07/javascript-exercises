const removeFromArray = function(arr, ...theArgs) {
    console.log(theArgs);
    console.log(arr);

    var args = theArgs;

    const filteredArray = arr.filter((item) => !args.includes(item));

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
