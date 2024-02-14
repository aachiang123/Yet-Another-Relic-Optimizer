import { Link } from "react-router-dom"
import character_data from "../assets/StarRailRes/index_new/en/characters.json"

const characters = Object.entries(character_data)
function getCharPortrait(name: string): string {
    const imgURL = new URL(`../assets/StarRailRes/${name}`, import.meta.url).href
    return imgURL
}

function Characters(): JSX.Element {
    const card_list = characters.map(character =>
        <Link to={character[0]}>
            <div className="card w-25 bg-base-100 shadow-xl image-full">
                <figure><img src={getCharPortrait(character[1].icon)}></img></figure>
                <div className="card-body">
                    <h2 className="card-title justify-center content-end">{character[1].name}</h2>
                </div>
            </div>
        </Link>
    )

    return (
        <div className="grid grid-cols-6 gap-8 mx-8 my-8">
            {card_list}
        </div>
    )
}

export default Characters
export { Characters as Component }