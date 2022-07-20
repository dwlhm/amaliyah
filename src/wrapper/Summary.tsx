import { createResource } from "solid-js";
import { GetSummary } from "../api/Summary";
import Summary from "../components/Summary";

import ErrorIcon from "../icons/ErrorIcon";
import DBIcon from "../icons/DBIcon";


export const SummaryWrapper = () => {
    
    const [ summary ] = createResource(GetSummary);
    
    return(
        <>
            {summary.loading ? (
                <div class="flex items-center justify-center p-5 mt-10">
                    <DBIcon />
                    <p class="ml-2 text-md font-semibold">Mendapatkan data</p>
                </div>
            ) : summary.error ? (
                <div class="flex items-center justify-center p-5 mt-10">
                    <ErrorIcon />
                    <p class="ml-2 text-md font-semibold text-red-600">Error sistem</p>
                </div>
            ) : (
                <Summary data={summary()} />
            )}
        </>
    )
}