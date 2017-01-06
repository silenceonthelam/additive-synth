import * as CtrlsActions    from "../actions";
import {bindActionCreators} from "redux";
import {connect}            from "react-redux";
import {CtrlWrap}           from "../components/CtrlWrap";
import {getSliderStyle}     from "../utils/ui-utils";
import React, 
       { Component, 
        PropTypes }         from "react";

export default connect(({
    ctrls: {baseFreq, mastGain},    
    partials: {disableAdd, disableRm, partials}, 
    syn: {isPlaying}
}) => ({
    baseFreq, disableAdd, disableRm, mastGain, partials, isPlaying
}), (dispatch) => ({
    ctrlsActs: bindActionCreators(CtrlsActions, dispatch)
}))(class CtrlsContainer extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const {
            baseFreq,
            disableAdd,
            disableRm,            
            isPlaying,
            mastGain,
            partials
        } = this.props;

        const {
            ctrlsActs: {
                addPartial, 
                rmPartial, 
                togglePlay, 
                updateBaseFreq, 
                updateMastGain
            }
        } = this.props;

        const playMod = isPlaying ? "--playing" : "";
        const sliderStyle = getSliderStyle(mastGain, isPlaying);

        return (
            <section className={"ctrls ctrls" + playMod}>
                <button className="ctrl--btn"
                    disabled={disableRm || isPlaying}
                    onClick={() => rmPartial(isPlaying)}>
                    -
                </button>

                <CtrlWrap 
                    change={(e) => updateBaseFreq(e.target.value, isPlaying)}
                    cssClass="ctrl__input"
                    id="base-freq"
                    labelTxt="Fund Freq"
                    maxVal={8000}
                    minVal={20}
                    stepVal={1}
                    type="tel"
                    val={baseFreq}
                    wrapMod="--num">
                    <span className="ctrl__unit">Hz</span>
                </CtrlWrap>
                <button className={"ctrl--btn--play" + playMod} 
                        onClick={(e) => togglePlay(baseFreq, mastGain, partials)}>
                    { isPlaying ? "Pause" : "Play" }
                </button>
                <CtrlWrap 
                    change={(e) => updateMastGain(e.target.value, isPlaying)}
                    cssClass="ctrl__slider"
                    id="mast-gain"
                    labelTxt="Mast Gain"
                    maxVal={1}
                    minVal={0}
                    stepVal={.1}
                    styles={sliderStyle}
                    type="range"
                    val={mastGain}
                    wrapMod="--slider" />

                <button className="ctrl--btn"
                    disabled={disableAdd || isPlaying}
                    onClick={() => addPartial(isPlaying)}>
                    +
                </button>
            </section>
        );
    }
});