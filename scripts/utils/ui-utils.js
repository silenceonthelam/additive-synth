export function getPartStyles(container, part) {
    const contElem = document.querySelector(container);
    const contHeight = (contElem && contElem.clientHeight) || (window.innerHeight - 182);
    const gainVal = parseFloat(part.val, 10);
    const gradientCut = (gainVal === contHeight) ? 0 : 
                        parseInt(contHeight - (gainVal  * contHeight), 10);
    const bgColor = "173, 78%, 50%";

    if ( gainVal === 0 ) {
        return {
            "backgroundImage": `radial-gradient(
                75% 1.5% at 50% -.25%,
                hsla(18,100%,95%,0) 50%,
                hsla(18,100%,95%,.35) 65%,
                hsla(18,100%,95%,0) 75%
            ), linear-gradient(
                hsla(18,100%,90%,.25) 0px,
                hsla(18,100%,90%,.05) 12px,
                hsla(18,100%,95%,.15) 35%,
                hsla(18,100%,95%,0) 65%                                 
            ), radial-gradient(
                100% 1.5% at 50% 98.5%,
                hsla(18,100%,75%,.35) 35%,
                hsla(18,100%,75%,0) 85%
            ), linear-gradient(
                90deg,
                hsla(173,100%,100%,.0) 50%,
                hsla(173,100%,100%,.2),
                hsla(173,100%,100%,.0)                 
            ), linear-gradient(
                90deg,
                hsla(173,100%,0%,.1),
                hsla(173,100%,0%,.05),
                hsla(173,100%,0%,.12) 50%     
            )` 
        };
    }

    return {
        "backgroundImage": `radial-gradient(
            150% 2% at 50% ${gradientCut + 0}px,
            hsla(173, 75%, 35%, .25) 15%,
            transparent 45%
        ), radial-gradient(
            100% 1.5% at 50% ${gradientCut + 4}px,
            hsla(173,100%,50%,.35) 0%,
            transparent 50%               
        ), radial-gradient(
            120% 1.5% at 50% ${gradientCut + 4}px,
            hsla(18,85%,35%,.15) 5%,
            transparent 35%          
        ), radial-gradient(
            120% 1% at 50% ${gradientCut + 3}px,
            hsla(18,75%,100%,.15) 25%,
            transparent 40%
        ), linear-gradient(
            180deg,
            transparent ${gradientCut}px,
            hsla(${bgColor}, .05) ${gradientCut}px                  
        ), radial-gradient(
            75% 1.5% at 50% -.25%,
            transparent 50%,
            hsla(18,100%,95%,.35) 65%,
            transparent 75%
        ), linear-gradient(
            hsla(18,100%,90%,.25) 0px,
            hsla(18,100%,90%,.05) 12px,
            hsla(18,100%,95%,.15) 35%,
            transparent 65%
        ), linear-gradient(
            90deg,
            transparent 50%,
            hsla(173,100%,100%,.2),
            transparent                 
        ), linear-gradient(
            90deg,
            hsla(173,100%,0%,.1),
            hsla(173,100%,0%,.05),
            hsla(173,100%,0%,.12) 50%     
        ), radial-gradient(
            200% 15% at 50% ${gradientCut + 8}px,
            hsla(173,100%,30%,.05) 15%,
            transparent 50%
        ), linear-gradient(
            hsla(233, 55%, 50%, .15),
            hsla(233, 85%, 50%, .25) ${gradientCut}px,
            hsla(173, 100%, 35%, .5) ${gradientCut + 4}px, 
            hsla(59, 100%, 65%, .35),
            hsla(18, 100%, 72%, .65),
            hsla(18, 100%, 75%, .75) 97.5%,
            hsla(355, 100%, 65%, .25) 99.5%     
        ), radial-gradient(
            100% 2.5% at 50% 99.05%,
            hsla(355,100%,75%,.25) 15%,
            transparent 45%                                           
        )` 
    };
}

export function getSelMod(part, sel) {
    if (sel === 0) {
        return {
            mod: "",
            widthMod: 1
        }; 
    }
    switch ( Math.abs(sel - part) ) {
        case 0:
            return {
                mod: "--sel",
                widthMod: 8
            };                    
        case 1:
            return {
                mod: "--sel-off-1",
                widthMod: 5
            };                
        case 2:
            return {
                mod: "--sel-off-2",
                widthMod: 3
            };                    
        case 3:
            return {
                mod: "--sel-off-3",
                widthMod: 2
            };
        default:
            return {
                mod: "",
                widthMod: 1
            };                                      
    }
}

export function getSliderStyle(mastGain=0, isPlaying) {
    const revealAmt = parseInt(mastGain * 100, 10);
    
    if (isPlaying) {
        return {
            backgroundImage: `linear-gradient(
                90deg,
                transparent ${revealAmt}%,
                hsla(176, 65%, 30%, 1) ${revealAmt}%  
            ),linear-gradient(
                to bottom right,
                transparent 49.5%, 
                hsla(176, 65%, 100%, .5) 49.5%,
                hsla(176, 65%, 100%, .35) 51%
            )`
        };
    }

    return {
        backgroundImage: `linear-gradient(
            90deg,
            transparent ${revealAmt}%,
            hsla(18, 60%, 60%, 1) ${revealAmt}%
        ),linear-gradient(
            to bottom right,
            transparent 49.5%, 
            hsla(233, 22%, 100%, .5) 49.5%,
            hsla(233, 22%, 100%, .35) 51%
        )`
    };
}