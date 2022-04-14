import * as React from "react";
import * as ReactDOM from "react-dom";
import "bulma/css/bulma.min.css"
import "@fortawesome/fontawesome-free/css/all.css";
import App from "../App"

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <React.StrictMode><App/> </React.StrictMode>,
        document.body.appendChild(document.createElement('div')),
    )
})
