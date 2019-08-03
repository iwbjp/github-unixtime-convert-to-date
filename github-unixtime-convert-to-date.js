/*!
 * Convert UNIXTIME to Date
 * (c) iwb.jp
 * Released under the MIT License.
 */
function addZero(n) {
  return ('0' + n).slice(-2)
}
$$('.Box-body td').forEach(el => {
  var timestamp = parseInt(
    el.textContent
      .split(',')
      .filter(el => /^\d{10}$/.test(el))
  )
  if (/^\d{10}$/.test(timestamp)) {
    var now = new Date(timestamp * 1000)
    var d1 = [
      now.getFullYear(),
      addZero(now.getMonth() + 1),
      addZero(now.getDate())
    ].join('/')
    var d2 = [
      addZero(now.getHours()),
      addZero(now.getMinutes()),
      addZero(now.getSeconds())
    ].join(':')
    el.textContent = el.textContent.replace(/\d{10}/, d1 + ' ' + d2)
  }
})
