import { useSearch, useSearchDispatch } from "@renderer/contexts/SearchContext"

function Search(): JSX.Element {
    const search = useSearch()
    const dispatch = useSearchDispatch()
    return <input
        type="text"
        placeholder="Search here"
        className="input input-bordered mx-auto my-8 w-1/2 max-w-xs"
        value={search}
        onChange={e => dispatch({type: "changed", text: e.target.value})}
    />
}

export default Search