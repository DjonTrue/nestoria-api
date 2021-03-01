import React from "react";

const SelectingCategory = ({ selectingItems }) => {
    return selectingItems.map((item, index) => {
        return (
            <div key={`${item}_${index}`} className="navbar-brand" href="#">
                {item}
            </div>
        );
    });
};

export default SelectingCategory;
