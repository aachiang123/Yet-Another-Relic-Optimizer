import { useParams } from "react-router-dom"
import { getStarRailImg } from "@renderer/components/GridList";
import { useState } from "react";
import { characterData, promotionData, exampleAccountData } from "./Data";
import Relic from "@renderer/components/Relic";

function calculateStat(promotion, stat: string, level): JSX.Element {
    return <p>{stat}: {promotion[stat]["base"] + (promotion[stat]["step"] * (level - 1))}</p>
}

function getRelicList(relics): Array<JSX.Element> {
    return relics.map(relic =>
        <Relic relic={relic}></Relic>
    )
}

function Character(): JSX.Element {
    const [level, setLevel] = useState(1)
    const { id } = useParams() as { id: string }
    const character = characterData[id]
    const index = level > 10 ? Math.floor((level - 11) / 10) : 0
    const promotion = promotionData[id]["values"][index]
    const accountChar = (exampleAccountData.characters).filter((char) => char.id === id)
    const relicList = accountChar.length != 0 ? getRelicList(accountChar[0].relics) : <div></div>

    function handleRange(e) {
        setLevel(e.target.value)
    }

    return (
        <div className="flex w-11/12 mx-8 my-8">
            <div className="w-1/2">
                <figure><img className="" src={getStarRailImg(character.portrait, "portrait")}></img></figure>
            </div>
            <div className="w-1/2">
                <p></p>
                <input type="range" min={1} max="80" className="range" value={level} onChange={handleRange} />
                <p>{level}</p>
                {calculateStat(promotion, "hp", level)}
                {calculateStat(promotion, "atk", level)}
                {calculateStat(promotion, "def", level)}
                <div className="grid grid-cols-2 gap-4">
                    {relicList}
                </div>
            </div>
        </div>
    )
}

export default Character
export { Character as Component }