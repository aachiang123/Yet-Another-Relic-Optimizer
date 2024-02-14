import { ChangeEventHandler } from "react"
import { getStarRailImg } from "./GridList"

type FilterProps = {
    filters
    handleFilters?: ChangeEventHandler
}

function getFilterList(data, handleFilters): Array<JSX.Element> {

    return data.map(element =>
        <div>
            <input type="checkbox" className="hidden peer" id={element[0]} onChange={handleFilters}></input>
            <label htmlFor={element[0]} className="opacity-100 peer-checked:opacity-50 peer-hover:border-2">
                <figure> <img className="w-12" src={getStarRailImg(element[1]["icon"])}></img> </figure>
            </label>
        </div>
    )
}
function Filter({ filters, handleFilters }: FilterProps): JSX.Element {
    const data = Object.entries(filters)
    const filterList = getFilterList(data, handleFilters)
    return <div className="flex flex-row mx-8 my-8 w-1/2 gap-4">
        {filterList}
    </div>
}

export default Filter