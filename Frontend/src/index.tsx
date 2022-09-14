import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./routes/Main";

ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>,
    document.getElementById("root"),
);