import { ChangeEventHandler } from "react"
import { getStarRailImg } from "./GridList"
import { useFilterDispatch } from "@renderer/contexts/FilterContext"

type FilterProps = {
    filters
}

function getFilterList(data, dispatch): Array<JSX.Element> {

    return data.map(element =>
        <div>
            <input
                type="checkbox" 
                className="hidden peer" 
                id={element[0]} 
                onChange={e => dispatch({type: (e.target.checked ? "add" : "delete"), id: e.target.id})}></input>
            <label htmlFor={element[0]} className="opacity-100 peer-checked:opacity-50 peer-hover:border-2">
                <figure> <img className="w-12" src={getStarRailImg(element[1]["icon"])}></img> </figure>
            </label>
        </div>
    )
}
function Filter({ filters }: FilterProps): JSX.Element {
    const dispatch = useFilterDispatch()
    const data = Object.entries(filters)
    const filterList = getFilterList(data, dispatch)
    return <div className="flex flex-row mx-8 my-8 w-1/2 gap-4">
        {filterList}
    </div>
}

export default Filter