const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
    }
    countDown(seconds) {
        let timePassed = 0;
        const interval = setInterval(emitInterval, 1000);
        const that = this;
        
        function emitInterval() {
            var remaining = seconds - timePassed;
            if (remaining == 0) {
                clearInterval(interval);
            }
            that.emit('tick', remaining);
            timePassed += 1;
        }
    }
}
module.exports = Timer;