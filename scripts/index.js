"use strict";

require("../styles/style.scss");

var React = require("react"),
    Synth = require("./components/Synth");

React.render(<Synth />, document.getElementById("synth"));