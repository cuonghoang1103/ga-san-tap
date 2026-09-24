const { calc } = require('./calc');
// tong tien mot don = tien hang + phi ship
function tongDon(hang, ship) { return calc(hang, ship); }
module.exports = { tongDon };
