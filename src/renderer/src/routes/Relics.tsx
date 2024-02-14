import GridList from "@renderer/components/GridList"
import { relicData } from "./Data"
import Search from "@renderer/components/Search"
import { useState } from "react"

function Relics(): JSX.Element {
  const [search, setSearch] = useState("")


  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <div className="flex flex-col">
      <Search
        searchString={search}
        handleSearch={handleSearch}

      />
      <GridList
        type="icon"
        data={relicData}
        search={search}
        width="w-30"
        height="h-30"
      />
    </div>
  )
}

export { Relics as Component }