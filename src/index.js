module.exports = function reverse(n) {
   n = n.toString();
   n[0] === '-' ? n = n.slice(1) : n;
   return Math.abs(n.split('').reverse().join(''));
}
