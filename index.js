//Return the Sum of Two Numbers
function addition(a, b) {
  return a + b;
}

// Function Factory
function makePlusFunction(baseNum) {
  return function (num) {
    return baseNum + num;
  };
}
Return - the - Sum - of - Two - Numbers;
function addition(a, b) {
  return a + b;
}
//Function get Grade
function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;

  if ((score >= 90) & (score <= 100)) {
    return "A";
  } else if ((score >= 80) & (score < 90)) {
    return "B";
  } else if ((score >= 70) & (score < 80)) {
    return "C";
  } else if ((score >= 60) & (score < 70)) {
    return "D";
  } else {
    return "F";
  }
}
console.log("=============>");
//A Redundant Function
function redundant(str) {
  return function () {
    return str;
  };
}
//Converting Objects to Arrays
function toArray(obj) {
  let arr = [];
  Object.keys(obj).forEach((key) => arr.push([key, obj[key]]));
  return arr;
}
//Tile Teamwork Tactics
function possibleBonus(a, b) {
  if (a < b && b - 6 <= a) {
    return true;
  } else {
    return false;
  }
}
//Triangular Number Sequence
function triangle(n) {
  var count = 0;
  for (var num = 0; num <= n; num++) {
    count = count + num;
  }
  return count;
}
//Add up the Numbers from a Single Number
function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
