import { useParams, useSearchParams } from "solid-app-router"
import { createResource } from "solid-js"
import { GetCategories } from "../api/Amaliyah"
import Categories from "../components/Categories"
import DBIcon from "../icons/DBIcon"
import ErrorIcon from "../icons/ErrorIcon"

export default () => {
    const params = useParams()

    console.log(params.id)

    const [ categories ] = createResource(params.id, GetCategories)

    return(<>
        {
            categories.loading
                ?   <div class="flex items-center justify-center p-5 mt-10">
                        <DBIcon />
                        <p class="ml-2 text-md font-semibold">Mendapatkan data</p>
                    </div>
                : categories.error || categories()?.msg == "error"
                ?   <div class="flex items-center justify-center p-5 mt-10">
                        <ErrorIcon />
                        <p class="ml-2 text-md font-semibold text-red-600">Error sistem</p>
                    </div>
                :   <Categories data={categories()?.body} />
        }
    </>)
}