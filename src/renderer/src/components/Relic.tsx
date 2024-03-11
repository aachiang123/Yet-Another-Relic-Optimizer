import { getStarRailImg } from "./GridList"

function getStatRow(affix) {
    console.log(affix)
    return <tr>
        <td>
            <div className="flex items-center">
                <img className="w-6" src={getStarRailImg(affix["icon"], "icon")}></img>
                {affix["name"]}
            </div>
        </td>
        <td>{affix["display"]}</td>
    </tr>
}
function getRelicStatTable(relic) {
    const relicMainStat = relic["main_affix"]
    const relicSubStat = relic["sub_affix"]
    const mainStatRow = getStatRow(relicMainStat)
    const subStatRows = Object.entries(relicSubStat).map(e => getStatRow(e[1]))
    return <table className="table-xm w-40">
        <tbody>
            {mainStatRow}
            {subStatRows}
        </tbody>
    </table>
}

function Relic({ relic }): JSX.Element {
    console.log(relic)
    const relicStatTable = getRelicStatTable(relic)
    return (
        <div className="card card-compact card-side bg-base-200 shadow-xl h-fit w-fit">
            <figure><img className="h-20" src={getStarRailImg(relic["icon"], "icon")}></img></figure>
            <div className="card-body">
                {relicStatTable}
            </div>
        </div>
    )
}

export default Relic