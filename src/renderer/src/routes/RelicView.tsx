import { useParams } from "react-router-dom"
import relic_data from "../assets/StarRailRes/index_new/en/relic_sets.json"

type Params = {
    id: string;
}

function getRelicIcon(name: string): string {
  const imgURL = new URL(`../assets/StarRailRes/${name}`, import.meta.url).href
  return imgURL
}

function Character(): JSX.Element {
    const { id } = useParams<keyof Params>() as Params
    const relic_portrait = <div className="w-1/2">
        <figure><img className="" src={getRelicIcon(relic_data[id].icon)}></img></figure>
    </div>

    return (
        <div className="mx-8 my-8">
            {relic_portrait}
        </div>
    )
}

export default Character
export {Character as Component}