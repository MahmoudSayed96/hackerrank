/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    // Remove PM from string
    const timeFormat = s.substr(s.length - 2);
    const cleanString = s.substr(0, s.indexOf(timeFormat));
    const timeArray = cleanString.split(':');
    const timeObj = {
        hh: Number(timeArray[0]),
        mm: Number(timeArray[1]),
        ss: Number(timeArray[2])
    }

    if (timeFormat === 'PM' && timeObj.hh < 12) {
        timeObj.hh += 12;
    } else if (timeFormat === 'AM' && timeObj.hh == 12) {
        timeObj.hh -= 12;
    }

    timeObj.hh = (timeObj.hh < 10) ? `0${timeObj.hh}` : timeObj.hh;
    timeObj.mm = (timeObj.mm < 10) ? `0${timeObj.mm}` : timeObj.mm;
    timeObj.ss = (timeObj.ss < 10) ? `0${timeObj.ss}` : timeObj.ss;

    const newTimeString = `${timeObj.hh}:${timeObj.mm}:${timeObj.hh}`;

    return newTimeString;
}

console.log(timeConversion('04:31:45PM'));