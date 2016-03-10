function Time()
{
    this.milliseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;

    this.setSeconds = function(seconds) {
        this.seconds = Math.floor(seconds / 60);
        console.log('setSeconds remainder: ' + (seconds % 60));
        this.setMinutes(seconds % 60);
        return this;
    }

    this.setMinutes = function(minutes) {
        this.minutes = Math.floor(minutes / 60);
        this.setHours(Math.floor(minutes % 60));
        return this;
    }

    this.setHours = function(hours) {
        this.hours = Math.floor(hours);
        return this;
    }

    this.getMinutes = function() {
        return this.minutes;
    }

    this.getHours = function() {
        return this.hours;
    }
}

time = new Time();
time.setSeconds(10);
console.log(time);
time.setSeconds(61);
console.log(time);
