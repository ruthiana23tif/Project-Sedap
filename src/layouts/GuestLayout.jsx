import { Outlet } from "react-router-dom";
// import Sidebar2 from "../components/Sidebar2";
import Navbar from "../components/guest/Navbar";


export default function MainLayout(){
    return(
        <div id="app-container" className="bg-gray-100 min-h-screen flex">

          <div id="main-content" className="flex-1 p-4">
            <Outlet/>
          </div>
      </div>
    )
}