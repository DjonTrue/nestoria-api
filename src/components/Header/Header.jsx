import React from "react";
import SearchField from "../SearchField/SearchField";
import SelectingCategory from "../SelectingCategory/SelectingCategory";

import "./Header.css";

const Header = ({ items }) => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-categories">
                <SelectingCategory selectingItems={items} />
            </div>
            <SearchField />
        </div>
    );
};

export default Header;
