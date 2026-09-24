const { tongDon } = require('../lib/bao-cao');
module.exports = () => tongDon(10, 20) === 30 || `tongDon(10,20) = ${tongDon(10, 20)}, mong doi 30`;
