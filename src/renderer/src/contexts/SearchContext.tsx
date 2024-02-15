import { Dispatch, createContext, useContext, useReducer } from 'react';

export const SearchContext = createContext("");
export const SearchDispatchContext = createContext({} as Dispatch<any>);

export function SearchProvider({ children }) {
    const [search, dispatch] = useReducer(searchReducer, initialSearch)

    return (
        <SearchContext.Provider value={search}>
            <SearchDispatchContext.Provider value={dispatch}>
                {children}
            </SearchDispatchContext.Provider>
        </SearchContext.Provider>
    )
}

export function useSearch() {
    return useContext(SearchContext)
}

export function useSearchDispatch() {
    return useContext(SearchDispatchContext)
}

function searchReducer(_search, action) {
    switch (action.type) {
        case 'changed': {
            return action.text
        }
    }
}
const initialSearch = ""