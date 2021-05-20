const Lengvosios = require('./Lengvosios')

class Tesla extends Lengvosios {
    constructor(name,steeringWheelPosition,seatCount,wheelCount) {
    super(name,steeringWheelPosition,seatCount,wheelCount)
    }
}

module.exports = Tesla