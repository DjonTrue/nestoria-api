import React from "react";
import { Link } from "react-router-dom";

const headerTabs = ["Characters", "Bookmarks"];

const SelectingCategory = () =>
    headerTabs.map((item, index) => (
        <Link to={item === "Characters" ? "/" : "bookmarks"}>
            <div key={`${item}_${index}`} className="navbar-brand">
                {item}
            </div>
        </Link>
    ));

export default SelectingCategory;
