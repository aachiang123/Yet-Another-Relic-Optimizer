import GridList from "@renderer/components/GridList"
import { lightconeData, pathData } from "./Data"
import Search from "@renderer/components/Search"
import { useState } from "react"
import Filter from "@renderer/components/Filter"
import { SearchProvider } from "@renderer/contexts/SearchContext"
import { FilterProvider } from "@renderer/contexts/FilterContext"

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
            <FilterProvider>
                <SearchProvider>
                    <div className="flex flex-row">
                        <Filter
                            filters={pathData}
                            accessor={e => e[1]["path"]}
                        />
                        <Search />
                    </div>
                    <GridList
                        type="icon"
                        data={lightconeData}
                    />
                </SearchProvider>
            </FilterProvider>
        </div>
    )
}

export { LightCones as Component }