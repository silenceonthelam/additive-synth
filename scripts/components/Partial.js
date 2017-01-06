import React from "react";

export const Partial = ({
    cssMod,
    handleSelClick,
    handleUpdateClick,
    part,
    styles
}) => (
    <li className={"part__list__item" + cssMod}
        onClick={handleUpdateClick}
        style={styles}>

        <span className="part__list__item__id"
                onClick={handleSelClick}>
            {part}
        </span>
    </li>   
);