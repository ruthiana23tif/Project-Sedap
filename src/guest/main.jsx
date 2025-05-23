import { createRoot  } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import './tailwind.css';

import CheckAnggota from "./CheckAnggota"

createRoot(document.getElementById("root"))
    .render(
        <div>
            <CheckAnggota/>
        </div>
    )