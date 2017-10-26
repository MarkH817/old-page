export async function sleep (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

export async function post (url, data) {
  let req = new window.XMLHttpRequest()
  req.open('POST', url, true)
  req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  req.send(JSON.stringify(data))

  return true
}
