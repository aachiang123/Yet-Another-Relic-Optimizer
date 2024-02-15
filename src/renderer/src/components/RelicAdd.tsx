import reactImg from "../../../../resources/icon.png"
import { propertyData, relicData, mainStatData, subStatData } from "@renderer/routes/Data"
import { getStarRailImg } from "./GridList"
import { useState } from "react"




function RelicAdd({ id }): JSX.Element {
    const [part, setPart] = useState(-1)
    const radioList = getRelicRadio(id)
    const mainStats = getMainStatRadio()
    const subStats = getSubStatBoxes()

    function getRelicRadio(relicId: string) {
        const list = relicId > "300" ? [4, 5] : [0, 1, 2, 3]
        return list.map(e =>
            <div className="join-item">
                <input type="radio" id={relicId + "_" + e} name="radio-part" className="hidden peer" value={e} onChange={e => setPart(parseInt(e.target.value))} />
                <label htmlFor={relicId + "_" + e} className="opacity-50 peer-checked:opacity-100 peer-hover:border-2">
                    <figure> <img className="w-12" src={getStarRailImg(`icon/relic/${relicId}_${e % 4}.png`, "icon")}></img> </figure>
                </label>
            </div>
        )
    }

    function getMainStatRadio() {
        if (part < 0) {
            return <div></div>
        }
        const relicId = `6${id}${part + 1}`
        const relicIdData = relicData[relicId]
        const mainStatId = relicIdData["main_affix_id"]
        const affixes = Object.entries(mainStatData[mainStatId]["affixes"]) as [string, any][]
        const mainStats = affixes.map(([k, v]) => propertyData[v["property"]])
        return mainStats.map(e =>
            <div className="join-item">
                <input type="radio" id={relicId + "_" + e["type"]} name="radio-main" className="hidden peer" value={e[0]} />
                <label htmlFor={relicId + "_" + e["type"]} className="opacity-50 peer-checked:opacity-100 peer-hover:border-2">
                    <figure> <img className="w-12" src={getStarRailImg(e["icon"], "icon")}></img> </figure>
                </label>
            </div>
        )
        return mainStats
    }

    function getSubStatBoxes() {
        if (part < 0) {
            return <div></div>
        }
        const relicId = `6${id}${part + 1}`
        const relicIdData = relicData[relicId]
        const subStatId = relicIdData["sub_affix_id"]
        const affixes = Object.entries(subStatData[subStatId]["affixes"]) as [string, any][]
        const subStats = affixes.map(([k, v]) => propertyData[v["property"]])
        return subStats.map(e =>
            <div className="">
                <div className="flex flex-row justify-around">
                    <input type="checkbox" id={relicId + "_sub_" + e["type"]} name="checkbox-stats" className="hidden peer" value={e[0]} />
                    <label htmlFor={relicId + "_sub_" + e["type"]} className="opacity-50 peer-checked:opacity-100">
                        <figure> <img className="w-12" src={getStarRailImg(e["icon"], "icon")}></img> </figure>
                    </label>
                    <input type="text" className="input input-bordered w-2/3" placeholder={e["name"] + (e["percent"] ? "%" : "")}></input>
                </div>
            </div>
        )
        return subStats
    }

    return (
        <div className="w-1/2 flex flex-col gap-4">
            <div className="join border">
                {radioList}
            </div>
            {part}
            <div className="join border justify-around">
                {mainStats}
                <input type="text" className="input input-bordered w-1/4" placeholder="Main Stat"></input>
            </div>
            <div className="grid grid-cols-2">
                {subStats}
            </div>
        </div>
    )
}

export default RelicAdd