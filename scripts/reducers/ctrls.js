import * as actions   from "../actions";

const ctrlsState = {
    baseFreq: 220,
    mastGain: .5
};

export const ctrls = (state = ctrlsState, action) => {
    switch (action.type) {
        case "CTRLS_UPDATE_BASE_FREQ":
            const {baseFreq} = action;

            if (action.isPlaying) {
                return state;
            }

            return {
                ...state,
                baseFreq
            };

        case "CTRLS_UPDATE_MAST_GAIN":
            const {mastGain} = action;

            if (action.isPlaying) {
                return state;
            }

            return {
                ...state,
                mastGain
            };       

        default:
            return state;
    }
};