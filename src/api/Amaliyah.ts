export const GetAmaliyah = async (id: string) => {

    let api = await fetch(`/data/${id}.json`)
        .then(res => res.json())
        .catch(err => {
            return {msg: "error", body: "Masalah koneksi server"}
        })

    return api
    
}

export const GetPengumuman = async () => {
    let saveToLocal: any[] = []
    const api = await (await (fetch(`${process.env.API_PENGUMUMAN_URL}`))).json()

    if (localStorage.getItem('pengumuman-terakhir') == api?.body[api?.body.length-1]) return

    api?.body.map(async (v: any, k: number, arr: any) => {
        const data = await (await (fetch(`https://amaliyah-workers.dwlhm0.workers.dev/pengumuman/${v}`))).json()

        saveToLocal[(arr.length - 1) - k] = {id: v, dibaca: false, ...data.body}

        if (k+1 === arr.length) {
            localStorage.setItem('pengumuman', JSON.stringify(saveToLocal))
            localStorage.setItem('pengumuman-terakhir', v)
        }
    })

}



export const GetCategories = async (id: string) => {
    let api = await fetch(`https://amaliyah-workers.dwlhm0.workers.dev/category/${id}`)
        .then(res => res.json())
        .catch(err => {
            return { msg: "error", body: "Masalah koneksi server" }
        })

    return api
}

export const GetAllCategories = async () => {
    let api = await fetch(`https://amaliyah-workers.dwlhm0.workers.dev/categories`)
        .then(res => res.json())
        .catch(err => {
            return { msg: "error", body: "Masalah koneksi server"}
        })

    let res = api.body.map((v: string) => {
        return {
            title: v,
            uri: `/kategori/${v.toLocaleLowerCase().replaceAll(" ", "-")}`
        }
    })

    console.log(res)
    return res
} 

export interface AmaliyahAPI {
    msg: string,
    body: any
}

export interface AmaliyahSummary {
    title: string,
    description: string,
    topic: string,
    tags: string[],
}

export interface Summary {
    topic: string,
    content: AmaliyahSummary[],
}

export interface Amaliyah {
    judul: string,
    deskripsi: string,
    topik: string,
    tags: string[],
    isi: IsiAmaliyah[] 
}

export interface IsiAmaliyah {
    tipe: string,
    judul: string,
    keterangan: KeteranganIsiAmaliyah | null,
    arab: string[] | [],
    latin: string[] | [],
    indo: string[] | [],
    isi: IsiAmaliyah[] | null,
}

export interface KeteranganIsiAmaliyah {
    awal: string[] | null,
    akhir: string[] | null
}