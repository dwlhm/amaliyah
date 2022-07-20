export const GetSummary =  async () => {
    const api = await (fetch(`/data/summary.json`/*`https://data-workers.dwlhm0.workers.dev/summary`*/))
        .then(res => res.json())
        .catch(err => {
            console.log(err)
            return {msg: "error", body: "Masalah koneksi server"}
        })
    
    return api
}