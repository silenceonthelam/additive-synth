import React from "react";

export const CtrlWrap = ({
    change,
    cssClass,
    id,
    labelTxt,
    maxVal,
    minVal,
    part,
    stepVal,
    styles={},
    type,
    val,
    wrapMod="",
    children
}) => (
    <label className={"ctrl" + wrapMod} htmlFor={id}>
        <span className="ctrl__label">{labelTxt}</span>
        <input
            className={cssClass}
            id={id}
            max={maxVal}
            min={minVal}
            onChange={change} 
            step={stepVal}
            style={styles}
            type={type}
            value={val} />
        {children}
    </label>
);