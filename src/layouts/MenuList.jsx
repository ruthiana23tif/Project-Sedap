import { CgNotes } from "react-icons/cg"; 
import { AiOutlineUserAdd } from "react-icons/ai"; 
import { FaBan, FaLock, FaQuestionCircle } from "react-icons/fa"; 
import { BsPeopleFill } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { MdDashboard, MdFastfood } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";


const menus = [
  {
    id: 1,
    to:"/dashboard" ,
    name: "Dashboard",
    icon: <MdDashboard className="mr-4 text-xl" />,
  },
  {
    id: 2,
    name: "Orders",
    to: "/orders",  
    icon: <BiCart className="mr-4 text-xl" />,
  },
  {
    id: 3,
    to: "/customers", 
    name: "Customers",
    icon: <BsPeopleFill className="mr-4 text-xl" />,
  },
  {
    id: 4,
    to: "/User", 
    name: "User",
    icon: <AiOutlineUserAdd  className="mr-4 text-xl" />,
  },
  {
    id: 5,
    to: "/error400", 
    name: "Error 400",
    icon: <FaLock className="mr-4 text-xl" />,
  },
  {
    id: 6,
    to: "/error401", 
    name: "Error 401",
    icon: <FaBan className="mr-4 text-xl" />,
  },
  {
    id: 7,
    to: "/error403", 
    name: "Error 403",
    icon: <FaQuestionCircle className="mr-4 text-xl" />,
  },
  {
    id: 8,
    to: "/products", 
    name: "Products",
    icon: <MdFastfood className="mr-4 text-xl" />,
  },
  {
    id: 9,
    to: "/notes", 
    name: "Notes",
    icon: <CgNotes className="mr-4 text-xl" />,
  },
];
const menuClass = ({ isActive }) =>
  `flex cursor-pointer items-center rounded-xl p-4  space-x-2
    ${
      isActive
        ? "text-hijau bg-green-200 font-extrabold"
        : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

export default function MenuList() {
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        {menus.map((menu) => (
          <li key={menu.id}>
            <NavLink
            to={menu.to}
              id={`menu-${menu.id}`}
              className={menuClass}
            >
              {menu.icon}
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
