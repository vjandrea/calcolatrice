$(document).ready(function () {

    totalTime = new Date();
    totalTime.setTime(0);
    totalTime.setMilliseconds(0);
    totalTime.setSeconds(0);
    totalTime.setMinutes(0);
    totalTime.setHours(0);

    $("body").keypress(function (e) {

        switch (e.keyCode) {

            case 17: // ctrl
                break;

            case 18: // ctrl+r
                e.preventDefault();
                break;

            case 13: // [Enter]
            case 43: // +
                totalTime = addTimeString($('#tempo').val(), totalTime);
                updateDisplay(totalTime);
                $('#tempo').val('');
                e.preventDefault();
                break;

            case 46: // .
                $('#tempo').val($('#tempo').val() + '.');
                e.preventDefault();
                break;

            case 48: // 0
            case 49: // 1
            case 50: // 2
            case 51: // 3
            case 52: // 4
            case 53: // 5
            case 54: // 6
            case 55: // 7
            case 56: // 8
            case 57: // 9
                $('#tempo').val($('#tempo').val() + String.fromCharCode(e.keyCode));
                e.preventDefault();
                break;

            case 58: //
                $('#tempo').val($('#tempo').val() + String.fromCharCode(e.keyCode));
                break;

            default: // disallow all other characters
                e.preventDefault();
        }
    }).bind('paste', function(e) {
        $('#tempo').val(e.originalEvent.clipboardData.getData('text/plain'));
    });
});

function addTimeString(string, total)
{
    if(string.length == 1 && string == 0 && parseInt(string) == 0) {
        var resetTime = new Date();

        resetTime.setTime(0);
        resetTime.setMilliseconds(0);
        resetTime.setSeconds(0);
        resetTime.setMinutes(0);
        resetTime.setHours(0);

        return resetTime;
    }

    var time = parseTimeString(string);

    total.setDate(total.getDate() + time.getDate());
    total.setHours(total.getHours() + time.getHours());
    total.setMinutes(total.getMinutes() + time.getMinutes());
    total.setSeconds(total.getSeconds() + time.getSeconds());
    total.setMilliseconds(total.getMilliseconds() + time.getMilliseconds());

    return total;
}

function parseTimeString(string)
{
    var pattern = '';
    var pieces = new Array;
    var milliseconds = 0;
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var time = new Date();

    time.setTime(0);

    if (string.length == 1 && /\d/.test(string)) {
        // 3
        pattern = 's';
        pieces = /(\d)/.exec(string);
        seconds = pieces[1];

    } else if(string.length == 2 && /\d\d/.test(string)) {
        // 33
        pattern = 'ss';
        pieces = /(\d\d)/.exec(string);
        seconds = pieces[1];

    } else if(string.length == 3 && /\d\d\d/.test(string)) {
        // 233
        pattern = 'mss';
        pieces = /(\d)(\d\d)/.exec(string);
        minutes = parseInt(pieces[1]);
        seconds = parseInt(pieces[2]);

    } else if(string.length == 4 && /\d\d\d\d/.test(string)) {
        // 2233
        pattern = 'mmss';
        pieces = /(\d\d)(\d\d)/.exec(string);
        minutes = parseInt(pieces[1]);
        seconds = parseInt(pieces[2]);

    } else if(string.length == 5 && /\d\d\d\d\d/.test(string)) {
        // 12233
        pattern = 'hmmss';
        pieces = /(\d)(\d\d)(\d\d)/.exec(string);
        hours = parseInt(pieces[1]);
        minutes = parseInt(pieces[2]);
        seconds = parseInt(pieces[3]);

    } else if(string.length == 6 && /\d\d\d\d\d\d/.test(string)) {
        // 112233
        pattern = 'hhmmss';
        pieces = /(\d\d)(\d\d)(\d\d)/.exec(string);
        hours = parseInt(pieces[1]);
        minutes = parseInt(pieces[2]);
        seconds = parseInt(pieces[3]);

    } else if(string.length == 3 && /\d\.\d/.test(string)) {
        // 2.3
        pattern = 'm.s';
        pieces = /(\d)\.(\d)/.exec(string);
        minutes = parseInt(pieces[1]);
        seconds = parseInt(pieces[2]);

    } else if(string.length == 4 && /\d\.\d\d/.test(string)) {
        // 2.33
        pattern = 'm.ss';
        pieces = /(\d)\.(\d\d)/.exec(string);
        minutes = parseInt(pieces[1]);
        seconds = parseInt(pieces[2]);

    } else if(string.length == 4 && /\d\d\.\d/.test(string)) {
        // 22.3
        pattern = 'mm.s';
        pieces = /(\d\d)\.(\d)/.exec(string);
        minutes = parseInt(pieces[1]);
        seconds = parseInt(pieces[2]);

    } else if(string.length == 5 && /\d\d\.\d\d/.test(string)) {
        // 22.33
        pattern = 'mm.ss';
        pieces = /(\d\d)\.(\d\d)/.exec(string);
        minutes = parseInt(pieces[1]);
        seconds = parseInt(pieces[2]);

    } else if(string.length == 3 && /\d:\d/.test(string)) {
        // 2:33
        pattern = 'm:s';
        pieces = /(\d)\:(\d)/.exec(string);
        minutes = parseInt(pieces[1]);
        seconds = parseInt(pieces[2]);

    } else if(string.length == 4 && /\d:\d\d/.test(string)) {
        // 2:33
        pattern = 'm:ss';
        pieces = /(\d)\:(\d\d)/.exec(string);
        minutes = parseInt(pieces[1]);
        seconds = parseInt(pieces[2]);

    } else if(string.length == 4 && /\d\d:\d/.test(string)) {
        // 22:33
        pattern = 'mm:s';
        pieces = /(\d\d)\:(\d)/.exec(string);
        minutes = parseInt(pieces[1]);
        seconds = parseInt(pieces[2]);

    } else if(string.length == 5 && /\d\d:\d\d/.test(string)) {
        // 22:33
        pattern = 'mm:ss';
        pieces = /(\d\d)\:(\d\d)/.exec(string);
        minutes = parseInt(pieces[1]);
        seconds = parseInt(pieces[2]);

    } else if(string.length == 7 && /\d\d:\d\d.\d/.test(string)) {
        // 22:33
        pattern = 'mm:ss.d';
        pieces = /(\d\d)\:(\d\d)\.(\d)/.exec(string);
        minutes = parseInt(pieces[1]);
        seconds = parseInt(pieces[2]);
        milliseconds = parseInt(pieces[3]) * 100;

    } else if(string.length == 7 && /\d:\d\d:\d\d/.test(string)) {
        // 1:22:33
        pattern = 'h:mm:ss';
        pieces = /(\d):(\d\d)\:(\d\d)/.exec(string);
        hours = parseInt(pieces[1]);
        minutes = parseInt(pieces[2]);
        seconds = parseInt(pieces[3]);

    } else if(string.length == 8 && /\d\d:\d\d:\d\d/.test(string)) {
        // 11:22:33
        pattern = 'hh:mm:ss';
        pieces = /(\d\d)\:(\d\d)\:(\d\d)/.exec(string);
        hours = parseInt(pieces[1]);
        minutes = parseInt(pieces[2]);
        seconds = parseInt(pieces[3]);

    } else if(string.length == 9 && /\d:\d\d:\d\d\.\d/.test(string)) {
        // 1:22:33.4
        pattern = 'h:mm:ss.d';
        pieces = /(\d)\:(\d\d)\:(\d\d)\.(\d)/.exec(string);
        hours = parseInt(pieces[1]);
        minutes = parseInt(pieces[2]);
        seconds = parseInt(pieces[3]);
        milliseconds = parseInt(pieces[4]) * 100;

    } else if(string.length == 10 && /\d\d:\d\d:\d\d\.\d/.test(string)) {
        // 11:22:33.4
        pattern = 'hh:mm:ss.d';
        pieces = /(\d\d)\:(\d\d)\:(\d\d)\.(\d)/.exec(string);
        hours = parseInt(pieces[1]);
        minutes = parseInt(pieces[2]);
        seconds = parseInt(pieces[3]);
        milliseconds = parseInt(pieces[4]) * 100;

    } else if(string.length == 11 && /\d\d:\d\d:\d\d\.\d\d/.test(string)) {
        // 11:22:33.44
        pattern = 'hh:mm:ss.dd';
        pieces = /(\d\d)\:(\d\d)\:(\d\d)\.(\d\d)/.exec(string);
        hours = parseInt(pieces[1]);
        minutes = parseInt(pieces[2]);
        seconds = parseInt(pieces[3]);
        milliseconds = parseInt(pieces[4]) * 10;

    } else if(string.length == 10 && /\d:\d\d:\d\d\.\d\d/.test(string)) {
        // 1:22:33.44
        pattern = 'h:mm:ss.dd';
        pieces = /(\d)\:(\d\d)\:(\d\d)\.(\d\d)/.exec(string);
        hours = parseInt(pieces[1]);
        minutes = parseInt(pieces[2]);
        seconds = parseInt(pieces[3]);
        milliseconds = parseInt(pieces[4]) * 10;

    } else if(string.length == 11 && /\d:\d\d:\d\d\.\d\d\d/.test(string)) {
        // 1:22:33.444
        pattern = 'h:mm:ss.ddd';
        pieces = /(\d)\:(\d\d)\:(\d\d)\.(\d\d\d)/.exec(string);
        hours = parseInt(pieces[1]);
        minutes = parseInt(pieces[2]);
        seconds = parseInt(pieces[3]);
        milliseconds = parseInt(pieces[4]);

    } else if(string.length == 12 && /\d\d:\d\d:\d\d\.\d\d\d/.test(string)) {
        // 11:22:33.444
        pattern = 'hh:mm:ss.ddd';
        pieces = /(\d\d)\:(\d\d)\:(\d\d)\.(\d\d\d)/.exec(string);
        hours = parseInt(pieces[1]);
        minutes = parseInt(pieces[2]);
        seconds = parseInt(pieces[3]);
        milliseconds = parseInt(pieces[4]);

    } else {
        console.log('unrecognized pattern to match ' + string + ' [' + string.length + ']');
    }

    time.setMilliseconds(milliseconds % 1000);
    time.setSeconds((seconds % 60) + Math.floor(milliseconds / 1000));
    time.setMinutes((minutes % 60) + Math.floor(seconds / 60));
    time.setHours(hours + Math.floor(minutes / 60));

    return time;
}

function updateDisplay(time)
{
    $('#tot_h').html(zeroPad(time.getHours()));
    $('#tot_m').html(zeroPad(time.getMinutes()));
    $('#tot_s').html(zeroPad(time.getSeconds()));
}

function zeroPad(number, width)
{
    if(width == null) {
        width = 2;
    }

    width -= number.toString().length;

    if ( width > 0 ) {
        return new Array(width + (/\./.test(number) ? 2 : 1) ).join('0') + number;
    }

    return number.toString();
}

// parseTimeString('11:22:33.444');
// parseTimeString('1:22:33.444');
// parseTimeString('11:22:33.44');
// parseTimeString('1:22:33.44');
// parseTimeString('11:22:33.4');
// parseTimeString('1:22:33.4');
// parseTimeString('11:22:33');
// parseTimeString('1:22:33');
// parseTimeString('22:33');
// parseTimeString('2:33');
// parseTimeString('22.33'); // parse as mm.ss
// parseTimeString('2.33'); // parse as m.ss
// parseTimeString('12233'); // parse as hmmss
// parseTimeString('2233'); // parse as mmss
// parseTimeString('233'); // parse as mss
// parseTimeString('99');
// parseTimeString('33');
// parseTimeString('3');
