import * as PartialsActions from "../actions";
import {bindActionCreators} from "redux";
import {connect}            from "react-redux";   
import { getPartStyles,
         getSelMod }        from "../utils/ui-utils";
import {omit}               from "lodash";
import {Partial}            from "../components/Partial";
import React, 
       { Component, 
        PropTypes }         from "react";

export default connect(({ 
    partials: {canMod, partials, selectedPartial}, 
    syn: {isPlaying}
}) => ({
    canMod, isPlaying, partials, selectedPartial
}), (dispatch) => ({
    partialsActs: bindActionCreators(PartialsActions, dispatch)
}))(class PartialsContainer extends Component {
    constructor(props, context) {
        super(props, context);
    }    
    render() {
        const {
            canMod,
            isPlaying,
            partials,
            selectedPartial
        } = this.props;

        const {
            partialsActs: { 
                updatePartial, 
                updateSelPartial
            }
        } = this.props;

        const playMod = isPlaying ? "--playing" : "";
            
        return (
            <ul className={"part__list" + playMod}>
                { this.renderPartials(
                    isPlaying, partials, selectedPartial, 
                    updatePartial, updateSelPartial) }
            </ul>
        );
    }
    renderPartials(isPlaying, partials, selectedPartial, 
                    updatePartial, updateSelPartial) {
        return Object.keys(partials).map((p)=> {
            const part = partials[p];
            const styles = getPartStyles(".part__list__item", part);
            const selMod = getSelMod(p, selectedPartial).mod;

            return (
                <Partial
                    cssMod={selMod}
                    handleSelClick={() => updateSelPartial(p)}
                    handleUpdateClick={(e) => updatePartial(e, p, isPlaying)}
                    key={p}
                    part={p}
                    styles={styles} />
            );
        });
    }
})