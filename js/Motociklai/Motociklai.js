const Transportas = require('../Transportas')

class Motociklai extends Transportas {
    constructor(name,wheelCount, hasStorage) {
        super(name,wheelCount)
        this.hasStorage = hasStorage
        }
}

module.exports = Motociklai