const dateConverter = dateString => {
  // 2019-01-15T04:38:57-05:00

  var m = new Date(dateString)

  const month =
    m.getMonth() < 10 ? `0${m.getMonth() + 1}` : `${m.getMonth() + 1}`
  const day = m.getDate() < 10 ? `0${m.getDate()}` : `${m.getDate()}`
  const hour = m.getHours() < 10 ? `0${m.getHours()}` : `${m.getHours()}`
  const minute =
    m.getMinutes() < 10 ? `0${m.getMinutes()}` : `${m.getMinutes()}`
  // const second =
  //   m.getSeconds() < 10 ? `0${m.getSeconds()}` : `${m.getSeconds()}`

  const date = `${day}.${month}.${m.getFullYear()}`
  const time = `${hour}:${minute}`

  const dateTime = `${date} ${time}`

  return dateTime
}

export default dateConverter
