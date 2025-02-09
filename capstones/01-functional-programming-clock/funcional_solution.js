const date = () => new Date()

const serializedDate = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
})

const stringifyNumber = number => number < 10 ? `0${number}` : number + ""

const formatTime = (formattedDate) => 
    Object.keys(formattedDate).map((key) => stringifyNumber(formattedDate[key])).join(":")

const compose = (...fns) => arg => fns.reduce((composed, f) => f(composed), arg)

const start = compose(
    console.clear,
    date,
    serializedDate,
    formatTime,
    console.log
)

setInterval(() => start(), 1000)
