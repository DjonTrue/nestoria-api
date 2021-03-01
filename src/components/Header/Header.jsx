import React from "react";
import SearchField from "../SearchField/SearchField";
import SelectingCategory from "../SelectingCategory/SelectingCategory";

import "./Header.css";

const Header = () => (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-categories">
            <SelectingCategory />
        </div>
        <SearchField />
    </div>
);

export default Header;
