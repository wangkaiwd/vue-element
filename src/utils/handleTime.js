// 时间格式：2016-07-23 21:52
export const formatTime = (timeStamp) => {
  const instance = new Date(timeStamp)
  const date = {
    year: instance.getFullYear(),
    month: instance.getMonth(),
    day: instance.getDate(),
    hour: instance.getHours(),
    minute: instance.getMinutes()
  }
  for (let k in date) {
    if (date.hasOwnProperty(k)) {
      if (date[k] !== 'year') {
        date[k] < 10 && (date[k] = `0${date[k]}`)
      }
    }
  }
  return `${date.year}-${date.month}-${date.day} ${date.hour}:${date.minute}`
}
