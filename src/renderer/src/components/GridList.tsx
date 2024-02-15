import { useFilter } from "@renderer/contexts/FilterContext"
import { useSearch } from "@renderer/contexts/SearchContext"
import Fuse from "fuse.js"
import { Link } from "react-router-dom"

type CardProps = {
    type: string
    data
    width?: string
    height?: string
}


const pathImages = {
    "Warrior": "icon/path/Destruction.png",
    "Rogue": "icon/path/Hunt.png",
    "Mage": "icon/path/Erudition.png",
    "Shaman": "icon/path/Harmony.png",
    "Warlock": "icon/path/Nihility.png",
    "Knight": "icon/path/Preservation.png",
    "Priest": "icon/path/Abundance.png",
    "Unknown": "icon/path/None.png"
}

export function getStarRailImg(name: string, type?: string): string {
    const imgPaths = {
        "icon": `../assets/StarRailRes/icon/${name.slice(5)}`,
        "portrait": `../assets/StarRailRes/image/${name.slice(6)}`,
    }
    const url = type ? imgPaths[type] : `../assets/StarRailRes/${name}`
    const imgURL = new URL(url, import.meta.url).href
    return imgURL
}

function getCardList(data, type: string, width: string, height: string): Array<JSX.Element> {
    const cardClass = `card ${width} ${height} bg-base-100 shadow-xl image-full`
    return data.map(element =>
        <Link to={element[0]}>
            <div className={cardClass}>
                <figure> <img src={getStarRailImg(element[1]["icon"], type)}></img> </figure>
                <div className="card-body relative">
                    {element[1]["path"] ? <img className="absolute left-0 top-0 w-10 mx-2 my-2"
                        src={getStarRailImg(pathImages[element[1]["path"]], type)}>
                    </img> : <div></div>}
                    {element[1]["element"] ? <img className="absolute right-0 top-0 w-10 mx-2 my-2"
                        src={getStarRailImg(`icon/element/${element[1]["element"].replace("Thunder", "Lightning")}.png`, type)}>
                    </img> : <div></div>}
                    <h2 className="card-title text-center absolute bottom-0">{element[1].name}</h2>
                </div>
            </div>
        </Link>
    )
}

function getSearchList(data, search) {
    if (search === "") {
        return data
    }
    const options = {
        includeScore: true,
        keys: ['1.name']
    }
    const fuse = new Fuse(data, options)
    const result = fuse.search(search)
    return result.filter(element =>
        element.score && element.score < 0.5
    ).map(element => element["item"])
}

function getFilterList(data, filters) {
    if (!filters) {
        return data
    }
    return data.filter(element =>
        !filters.has(element[1]["path"])
    )
}

function GridList({ type, data, width = "w-40", height = "h-56" }: CardProps): JSX.Element {
    const search = useSearch()
    const filter = useFilter()
    const searchList = getSearchList(Object.entries(data), search)
    const filterList = getFilterList(searchList, filter)
    const cardList = getCardList(filterList, type, width, height)
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mx-8">
            {cardList}
        </div>
    )
}
export default GridList