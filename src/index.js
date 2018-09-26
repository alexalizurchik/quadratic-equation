module.exports = function solveEquation(str) {
  let newStr = str.replace(/ /g, "");
  let re = /((\+|-)?\d+)\*x\^2((\+|-)\d+)\*x((\+|-)\d+)/;
  let abc = newStr.match(re);
  let a = +abc[1];
  let b = +abc[3];
  let c = +abc[5];
  let absA = Math.abs(a);  
 
  c /= absA;
  b /= absA;
  a /= absA;
  
  return solveQuadraticEquation(a, b, c);
}


function solveQuadraticEquation(a, b, c) {
  let d = b * b - 4 * a * c;
  let result = [];
  let x1 = (-b + Math.sqrt(d)) / (2 * a);
  let x2 = (-b - Math.sqrt(d)) / (2 * a);
  
  result.push(x1);
  result.push(x2);
  
  return result.sort(function(a, b) {
    return a - b;
  });
}