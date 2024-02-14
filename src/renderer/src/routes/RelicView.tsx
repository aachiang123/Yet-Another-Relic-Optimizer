import { useParams } from "react-router-dom"
import { getStarRailImg } from "@renderer/components/GridList";
import { relicData } from "./Data";

function Relic(): JSX.Element {
    const { id } = useParams() as {id: string}
    const relic_portrait = <div className="w-1/2">
        <figure><img className="" src={getStarRailImg(relicData[id].icon, "icon")}></img></figure>
    </div>

    return (
        <div className="mx-8 my-8">
            {relic_portrait}
        </div>
    )
}

export { Relic as Component }