import GridList from "@renderer/components/GridList"
import { characterData, pathData, elementData } from "./Data"
import Search from "@renderer/components/Search"
import Filter from "@renderer/components/Filter"
import { useState } from "react"
import { SearchProvider } from "@renderer/contexts/SearchContext"
import { FilterProvider } from "@renderer/contexts/FilterContext"

function Characters(): JSX.Element {
    const [filterSet, setFilters] = useState(new Set<String>())

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
                        data={characterData}
                    />
                </SearchProvider >
            </FilterProvider>
        </div>
    )
}

export { Characters as Component }