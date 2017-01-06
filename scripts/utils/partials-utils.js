export function addPartial(partials, isPlaying) {
    if (isPlaying) {
        return {
            disableAdd: false,
            partials: partials
        };
    }

    let listItem = document.querySelector(".part__list__item"),
        list = document.querySelector(".part__list");

    if ( (listItem.clientWidth / list.clientWidth) * 100 < 2) {
        return {
            disableAdd: true,
            partials: partials
        };
    }

    return {
        disableAdd: false,
        partials: Object.assign({}, partials, { 
                    [Object.keys(partials).length + 1]: {active:true, val:.5} 
                })
    };
}

export function calcNewFill(height, y) {
    const newVal = (100 - Math.round( parseInt(y - 40, 10) / 
            parseInt(height, 10) * 100) ) / 100;
    return newVal > 0 ? newVal : 0;
}

export function rmPartial(partials, isPlaying) {
    if (isPlaying) {
        return {
            disableRm: false,
            partials: partials
        }; 
    }

    let len = Object.keys(partials).length;

    if (len <= 2) {
        return {
            disableRm: true,
            partials: _.omit(partials, len)
        }; 
    }

    return {
        disableRm: false,
        partials: _.omit(partials, len)
    }; 
}

export function updatePartial(partials, part, val, isPlaying) {
    if (isPlaying) {
        return;
    }

    return Object.assign({}, partials, { [part]: val });
}