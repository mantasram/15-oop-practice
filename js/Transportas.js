class Transportas{
    constructor(name, steeringWheelPosition,seatCount,wheelCount) {
    this.name = name;
    this.steeringWheelPosition = steeringWheelPosition;
    this.seatCount = seatCount;
    this.engineIsOn = false;
    this.wheelCount = wheelCount;
    }

    turnOnTheEngine() {
        this.engineIsOn = true;
    }
    turnOfftheEngine() {
        this.engineIsOn = false;
    }


}

module.exports = Transportas

