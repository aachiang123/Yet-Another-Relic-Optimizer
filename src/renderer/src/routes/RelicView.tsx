import { useParams } from "react-router-dom"
import { getStarRailImg } from "@renderer/components/GridList";
import { relicSetData } from "./Data";
import RelicAdd from "@renderer/components/RelicAdd";

function Relic(): JSX.Element {
    const { id } = useParams() as { id: string }
    const relic_portrait = <div className="w-1/2 my-auto">
        <figure><img className="mx-auto my-auto" src={getStarRailImg(relicSetData[id].icon, "icon")}></img></figure>
    </div>

    return (
        <div className="mx-8 my-8 flex h-full">
            {relic_portrait}
            <RelicAdd
                id={id}
            />
        </div>
    )
}

export { Relic as Component }