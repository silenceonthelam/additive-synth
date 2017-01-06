import * as actions       from "../actions";     
import { addPartial,
         calcNewFill,
         rmPartial, 
         updatePartial }  from "../utils/partials-utils";

const partialsState = {
    canMod: false, 
    disableAdd: false,
    disableRm: false,    
    partials: {
        "1": {val:.5},
        "2": {val:.5},
        "3": {val:.5},
        "4": {val:.5},
        "5": {val:.5},
        "6": {val:.5},
        "7": {val:.5},
        "8": {val:.5},
        "9": {val:.5},
        "10": {val:.5},
        "11": {val:.5},
        "12": {val:.5}       
    },
    selectedPartial: 0
};

function updatePartVal(partials, part, val) {
    return {
        ...partials, 
            [part]: {val: val}
        };
}

export const partials = (state = partialsState, action) => {
    switch (action.type) {
        case "BTNS_ADD_PARTIAL":
            const {disableAdd,
                    partials} = addPartial(state.partials, action.isPlaying);
            return {
                ...state,
                disableAdd: disableAdd,
                disableRm: false,
                partials: partials
            };

        case "BTNS_RM_PARTIAL":
            const rm = rmPartial(state.partials, action.isPlaying);
            return {
                ...state,
                disableAdd: false,
                disableRm: rm.disableRm,
                partials: rm.partials
            };  

        case "PARTIALS_UPDATE_PARTIAL": 
            let {
                clientY, 
                target
            } = action.e;

            let {isPlaying} = action;

            if (isPlaying) {
                return state;
            }

            return {
                ...state,
                partials: updatePartVal(
                            state.partials,
                            action.part, 
                            calcNewFill(target.clientHeight, clientY)
                        )
            };

        case "PARTIALS_UPDATE_SEL_PARTIAL":
            let {selectedPartial} = action;

            if (selectedPartial === state.selectedPartial) {
                selectedPartial = 0;
            }

            return {
                ...state,
                selectedPartial
            };

        default:
            return state;
    }
};