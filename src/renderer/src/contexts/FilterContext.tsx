import { Dispatch, createContext, useContext, useReducer } from 'react';

export const FilterContext = createContext({} as any);
export const FilterDispatchContext = createContext({} as Dispatch<any>);

export function FilterProvider({ children }) {
    const [filter, dispatch] = useReducer(filterReducer, initialFilter)

    return (
        <FilterContext.Provider value={filter}>
            <FilterDispatchContext.Provider value={dispatch}>
                {children}
            </FilterDispatchContext.Provider>
        </FilterContext.Provider>
    )
}

export function useFilter() {
    return useContext(FilterContext)
}

export function useFilterDispatch() {
    return useContext(FilterDispatchContext)
}

function filterReducer(filter, action) {
    console.log(filter)
    const newFilter = {
        ...filter,
        set: new Set(filter.set)
    }
    switch (action.type) {
        case 'add': {
            newFilter.set.add(action.id)
            return newFilter
        }
        case 'delete': {
            newFilter.set.delete(action.id)
            return newFilter
        }
        case 'method': {
            newFilter.accessor = action.accessor
            return newFilter
        }
    }
    return newFilter
}
const initialFilter = {
    set: new Set<String>(),
    accessor: () => { }
}