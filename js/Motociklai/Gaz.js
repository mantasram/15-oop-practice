const Motociklai = require('./Motociklai')

class Gaz extends Motociklai {
    constructor(name,steeringWheelPosition,seatCount,wheelCount, hasStorage) {
        super(name,steeringWheelPosition,seatCount,wheelCount, hasStorage)
    }
}

module.exports = Gaz