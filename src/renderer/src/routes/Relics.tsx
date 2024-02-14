import { Link } from "react-router-dom"
import relic_data from "../assets/StarRailRes/index_new/en/relic_sets.json"
const relics = Object.entries(relic_data)

function getRelicIcon(name: string): string {
  const imgURL = new URL(`../assets/StarRailRes/${name}`, import.meta.url).href
  return imgURL
}

function Relics(): JSX.Element {
  const relic_list = relics.map(relic =>
    <Link to={relic[0]}>
    <div className="card w-25 bg-base-100 shadow-xl image-full">
      <figure><img src={getRelicIcon(relic[1].icon)}></img></figure>
      <div className="card-body">
        <h2 className="card-title justify-center content-end">{relic[1].name}</h2>
      </div>
    </div>
    </Link>
  )
  return (
    <div className="grid grid-cols-6 gap-8 mx-8 my-8">
      {relic_list}
    </div>
  )
}

export default Relics
export {Relics as Component}