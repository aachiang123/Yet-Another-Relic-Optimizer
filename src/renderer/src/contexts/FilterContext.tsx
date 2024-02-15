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
    const newSet = new Set(filter)
    switch (action.type) {
        case 'add': {
            newSet.add(action.id)
            return newSet
        }
        case 'delete': {
            newSet.delete(action.id)
            return newSet
        }
    }
    return newSet
}
const initialFilter = new Set<String>()