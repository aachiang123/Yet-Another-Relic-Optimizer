import GridList from "@renderer/components/GridList"
import { relicSetData } from "./Data"
import Search from "@renderer/components/Search"
import { useState } from "react"
import { SearchProvider } from "@renderer/contexts/SearchContext"
import { FilterProvider } from "@renderer/contexts/FilterContext"

function Relics(): JSX.Element {
  const [search, setSearch] = useState("")


  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <div className="flex flex-col">
      <SearchProvider>
        <FilterProvider>
          <Search />
          <GridList
            type="icon"
            data={relicSetData}
            width="w-30"
            height="h-30"
          />
        </FilterProvider>
      </SearchProvider>
    </div>
  )
}

export { Relics as Component }