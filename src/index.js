module.exports = function reverse (n) {
  let str = Math.abs(n) + "";
  return str.split("").reverse().join("");
}