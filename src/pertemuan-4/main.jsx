import { createRoot  } from "react-dom/client";
import './tailwind.css';
import frameworkData from "./framework.json";
import FrameworkList from "./FrameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";
import ProductList from "./ProductList";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <FrameworkListSearchFilter/>
           <ResponsiveDesign/>
           <ProductList/>
        </div>
    )