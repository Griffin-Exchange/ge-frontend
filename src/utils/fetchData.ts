const fetchData = async (url: string, method: string, body: any = null) => {
  try {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const req: any = { method, headers }
    if (body) req.body = JSON.stringify(body)

    return await fetch('http://13.48.31.29:8800/api/v1' + url, req).then((val) =>
      val.json(),
    )
  } catch (e) {
    console.log(e)
  }
}

export default fetchData
