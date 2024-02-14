import { Link } from "react-router-dom"
import ReactIcon from "../../../../resources/icon.png"

function Navbar(): JSX.Element {
  return (
    <div className="w-full navbar bg-base-300">
      <div className="flex-1 px-2 mx-2">
        <Link to="/"> Yet Another Relic Optimizer </Link>
      </div>
      <div className="flex-none lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="avatar m-1">
              <div className="w-8 rounded-full">
                <img src={ReactIcon} />
              </div>
            </div>
            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
              <li><a>Account</a></li>
              <li><a>Settings</a></li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar