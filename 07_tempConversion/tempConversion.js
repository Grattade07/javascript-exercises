const ftoc = function(temp) {
  let cel = (temp-32)*(5/9);
  let roundedCel = Math.round(cel*10)/10;

  return roundedCel;
};

const ctof = function(temp) {
 let fah = temp*(9/5)+32;
 let roundedFah = Math.round(fah*10)/10;

 return roundedFah;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
