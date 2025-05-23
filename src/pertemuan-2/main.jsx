import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import './custom.css';
import Artikel from "./Artikel";
import Qna from "./Qna";


createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container>
                <Artikel/>
                <Qna/>
            </Container>
                
            
        </div>
    )

