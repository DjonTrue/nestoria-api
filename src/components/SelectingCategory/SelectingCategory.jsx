import React from "react";

const headerTabs = ["Characters", "Episodes", "Locations"];

const SelectingCategory = () =>
    headerTabs.map((item, index) => {
        return (
            <div key={`${item}_${index}`} className="navbar-brand">
                {item}
            </div>
        );
    });

export default SelectingCategory;
