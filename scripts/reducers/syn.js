import * as actions   from "../actions";
import { play, stop } from "../utils/audio-utils";

const synState = {
    isPlaying: false
};

export const syn = (state = synState, {baseFreq, mastGain, partials, type} = action) => {
    switch (type) {
        case "SYN_TOGGLE_PLAY":
            if (state.isPlaying) {
                stop();

                return {
                    ...state,
                    isPlaying: false
                };   
            } else {
                play(baseFreq, mastGain, partials);

                return {
                    ...state,
                    isPlaying: true
                };
            }         

        default:
            return state;
    }
};