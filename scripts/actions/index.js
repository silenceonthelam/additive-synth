// BTNS_
    export const addPartial = (isPlaying) => ({
        isPlaying, 
        type: "BTNS_ADD_PARTIAL" 
    });
    export const rmPartial = (isPlaying) => ({
        isPlaying, 
        type: "BTNS_RM_PARTIAL" 
    });

// CTRLS_
    export const updateBaseFreq = (baseFreq, isPlaying) => ({
        baseFreq,
        isPlaying,
        type: "CTRLS_UPDATE_BASE_FREQ"
    });

    export const updateMastGain = (mastGain, isPlaying) => ({
        isPlaying,
        mastGain,
        type: "CTRLS_UPDATE_MAST_GAIN"
    });

// PARTIALS_
    export const updatePartial = (e, part, isPlaying) => ({
        e,
        isPlaying,
        part,
        type: "PARTIALS_UPDATE_PARTIAL"
    });

    export const updateSelPartial = (selectedPartial) => ({
        selectedPartial,
        type: "PARTIALS_UPDATE_SEL_PARTIAL"
    });

// SYN_
    export const togglePlay = (baseFreq, mastGain, partials) => ({
        baseFreq,
        mastGain,
        partials,
        type: "SYN_TOGGLE_PLAY"
    });