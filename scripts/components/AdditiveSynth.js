import CtrlsContainer    from "../containers/CtrlsContainer";
import PartialsContainer from "../containers/PartialsContainer";
import React             from "react";

export const AdditiveSynth = () => (
    <main className="synth">
        <PartialsContainer />
        <CtrlsContainer /> 
    </main>
);