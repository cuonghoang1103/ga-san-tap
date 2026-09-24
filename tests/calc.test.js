const { calc } = require('../lib/calc');
module.exports = () => calc({ a: 2, b: 3 }) === 5 || `calc({a:2,b:3}) = ${calc({ a: 2, b: 3 })}, mong doi 5`;
