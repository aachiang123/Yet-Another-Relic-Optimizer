import { useParams } from "react-router-dom"
import character_data from "../assets/StarRailRes/index_new/en/characters.json"

type Params = {
    id: string;
}
function getCharPortrait(name: string): string {
    const imgURL = new URL(`../assets/StarRailRes/${name}`, import.meta.url).href
    return imgURL
}

function Character(): JSX.Element {

    const { id } = useParams<keyof Params>() as Params
    const character_portrait = <div className="w-1/2">
        <figure><img className="" src={getCharPortrait(character_data[id].portrait)}></img></figure>
    </div>

    return (
        <div className="mx-8 my-8">
            {character_portrait}
        </div>
    )
}

export default Character
export {Character as Component}