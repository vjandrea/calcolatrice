$(document).ready(function () {
    // $(document).foundation();

    $("body").keypress(function (e) {

        switch (e.keyCode) {
            case 17:
                //console.log('Ctrl');
                break;

            case 18: // ctrl+r
                e.preventDefault();
                break;

            case 43: // +
                // TODO: sum #tempo value to the total, then reset the input field
                addTimeString($('#tempo').val());
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

            default:
                //alert(e.keyCode);
        }
    }).bind('paste', function(e) {
        $('#tempo').val(e.originalEvent.clipboardData.getData('text/plain'));
    });
});

function addTimeString(string)
{
    console.log('addTimeString(' + string + ')');
    console.log('parseTimeString: ' + parseTimeString(string));
}

function parseTimeString(string)
{
    console.log('parseTimeString(' + string + ')');
    var pattern = '';
    var pieces = new Array;
    var decimals = 0;
    var seconds = 0;
    var minutes = 0;
    var hours = 0;

    if (string.length == 1 && /\d/.test(string)) {
        pattern = 's';
        seconds = parseInt(string);

    } else if(string.length == 2 && /\d\d/.test(string)) {
        pattern = 'ss';
        seconds = parseInt(string);

    } else if(string.length == 3 && /\d\d\d/.test(string)) {
        pattern = 'mss';
    } else if(string.length == 4 && /\d\d\d\d/.test(string)) {
        pattern = 'mmss';
    } else if(string.length == 4 && /\d\.\d\d/.test(string)) {
        pattern = 'm.ss';
    } else if(string.length == 5 && /\d\d\.\d\d/.test(string)) {
        pattern = 'mm.ss';
    } else if(string.length == 5 && /\d\d:\d\d/.test(string)) {
        pattern = 'mm:ss';
    } else if(string.length == 8 && /\d\d:\d\d:\d\d/.test(string)) {
        pattern = 'hh:mm:ss';
    } else if(string.length == 10 && /\d\d:\d\d:\d\d\.\d/.test(string)) {
        pattern = 'hh:mm:ss.d';
    } else if(string.length == 11 && /\d\d:\d\d:\d\d\.\d\d/.test(string)) {
        pattern = 'hh:mm:ss.dd';
    } else if(string.length == 12 && /\d\d:\d\d:\d\d\.\d\d\d/.test(string)) {
        pattern = 'hh:mm:ss.ddd';
    } else {
        console.log('unrecognized pattern');
        console.log('lenght: ' + string.length);
    }

    // console.log('pattern: ' + pattern);
    console.log('seconds: ' + seconds);

    return pattern;
}

parseTimeString('02:01:45.430');
parseTimeString('02:01:45.43');
parseTimeString('02:01:45.4');
parseTimeString('02:01:45');
parseTimeString('02:01');
parseTimeString('19.01'); // parse as mm.ss
parseTimeString('6.01'); // parse as m.ss
parseTimeString('1901');
parseTimeString('901');
parseTimeString('21');
parseTimeString('2');
