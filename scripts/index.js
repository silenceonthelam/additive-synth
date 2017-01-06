import {AdditiveSynth} from "./components/AdditiveSynth";
import {createStore}   from "redux";
import {Provider}      from "react-redux";
import React           from "react";
import {render}        from "react-dom";
import synthApp        from "./reducers";

import "../styles/style.scss";

const rootElem = document.getElementById("root");
const store = createStore(synthApp);

render(
    <Provider store={store}>
        <AdditiveSynth />
    </Provider>,
    rootElem
);