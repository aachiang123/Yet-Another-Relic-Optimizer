import GridList from "@renderer/components/GridList"
import { lightconeData, pathData } from "./Data"
import Search from "@renderer/components/Search"
import { useState } from "react"
import Filter from "@renderer/components/Filter"

function LightCones(): JSX.Element {
    const [search, setSearch] = useState("")
    const [filterSet, setFilters] = useState(new Set<String>())

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    function handleFilters(e) {
        const newSet = new Set(filterSet)
        if (e.target.checked) {
            newSet.add(e.target.id)
            setFilters(newSet)
        } else {
            newSet.delete(e.target.id)
            setFilters(newSet)
        }
    }

    return (
        <div className="flex flex-col">

            <div className="flex flex-row">
                <Filter
                    filters={pathData}
                    handleFilters={handleFilters}
                />
                <Search
                    searchString={search}
                    handleSearch={handleSearch}
                />
            </div>
            <GridList
                type="icon"
                data={lightconeData}
                search={search}
                filters={filterSet}
            />
        </div>
    )
}

export { LightCones as Component }