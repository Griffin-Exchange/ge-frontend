const fetchData = async (url: string, method: string, body: any) => {
  try {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const req: any = { method, headers }
    if (body) req.body = JSON.stringify(body)

    return await fetch('http://localhost:8800/api/v1' + url, req).then((val) =>
      val.json(),
    )
  } catch (e) {
    console.log(e)
  }
}

export default fetchData
