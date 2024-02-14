import Footer from '@renderer/components/Footer';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet, useNavigation } from "react-router-dom";

function handleLoading(state: string): JSX.Element {
  if (state === "loading") {
    return <span className="loading loading-spinner loading-lg mx-auto my-auto"></span>
  } else {
    return <Outlet/>
  }
}
function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const navigation = useNavigation();

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-open">
        <input id="main-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {handleLoading(navigation.state)}
          <Footer />
        </div>
        <Sidebar></Sidebar>
      </div>
    </div>
  )
}

export default App
