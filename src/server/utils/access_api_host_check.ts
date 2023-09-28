
const origin = ['https://drsrkhan.com', "http://localhost:3000", "https://drsrkhan.vercel.app"]
const host = ['localhost:3000', 'drsrkhan.com']
const check_url_for_all_without_verification = (request: any) => {
    const method = request.method
    const get_host = request.headers.host
    const get_origin = request.headers.origin
    if (method === "GET") {
        return host?.includes(get_host)
    }
    else {
        return origin?.includes(get_origin)
    }
}
export { check_url_for_all_without_verification }