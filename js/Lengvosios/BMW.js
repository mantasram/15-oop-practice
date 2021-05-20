const Lengvosios = require('./Lengvosios')

class BMW extends Lengvosios {
    constructor(name,steeringWheelPosition,seatCount,wheelCount) {
    super(name,steeringWheelPosition,seatCount,wheelCount)
    }
}

module.exports = BMW