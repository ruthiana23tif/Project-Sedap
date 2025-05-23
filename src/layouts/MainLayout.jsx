import { Outlet } from "react-router-dom";
import Sidebar2 from "../components/Sidebar2";
import Header from "../components/Header";


export default function MainLayout(){
    return(
        <div id="app-container" className="bg-gray-100 min-h-screen flex">
          {/* <Sidebar/> */}
          <Sidebar2/>
          <div id="main-content" className="flex-1 p-4">
            <Header/>
            <Outlet/>
          </div>
      </div>
    )
}