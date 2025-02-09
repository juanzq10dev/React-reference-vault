setInterval(logTime, 1000)

function logTime() {
    console.clear()
    console.log(formatHour(getClockTime()))
}

function getClockTime() {
    const date = new Date()
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
}

function formatHour({
    hours,
    minutes,
    seconds
}) {
    return `${stringifyNumber(hours)}:${stringifyNumber(minutes)}:${stringifyNumber(seconds)}`
}

function stringifyNumber(number) {
    if (number < 10) {
        return `0${number}`
    }

    return number + ""
}
