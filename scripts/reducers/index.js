import { combineReducers } from "redux";
import { ctrls }           from "./ctrls";
import { partials }        from "./partials";
import { syn}              from "./syn";

export default combineReducers({
    ctrls,
    partials,
    syn
});