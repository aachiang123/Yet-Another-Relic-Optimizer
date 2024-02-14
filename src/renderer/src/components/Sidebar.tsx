import { NavLink } from "react-router-dom";

function Sidebar(): JSX.Element {
    return (
        <div className="drawer-side">
            <label htmlFor="main-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-60 min-h-full bg-base-200">
                {/* Sidebar content here */}
                <li><NavLink to={"characters"}>Character View</NavLink></li>
                <li><NavLink to={"relics"}>Relic View</NavLink></li>
                <li><NavLink to={"lightcones"}>LightCone View</NavLink></li>
                
            </ul>
        </div>
    )
}

export default Sidebar