const { calc } = require('../lib/calc');
module.exports = () => calc(2, 3) === 5 || `calc(2,3) = ${calc(2, 3)}, mong doi 5`;
