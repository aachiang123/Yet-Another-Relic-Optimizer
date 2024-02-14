import { ChangeEventHandler } from "react"

type SearchProps = {
    searchString: string
    handleSearch: ChangeEventHandler
}

function Search({ searchString, handleSearch }: SearchProps): JSX.Element {
    return <input
        type="text"
        placeholder="Search here"
        className="input input-bordered mx-auto my-8 w-1/2 max-w-xs"
        value={searchString}
        onChange={handleSearch}
    />
}

export default Search