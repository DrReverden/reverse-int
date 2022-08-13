module.exports = function reverse(n) {
   n = n.toString();
   return Math.abs(n.split('').reverse().join(''));
}