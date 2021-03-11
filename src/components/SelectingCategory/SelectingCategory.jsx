import React from "react";
import { Link } from "react-router-dom";

const headerTabs = ["Characters", "Bookmarks"];

const SelectingCategory = () =>
    headerTabs.map((item, index) => (
        <Link key={`${item}_${index}`} to={item === "Characters" ? "/" : "bookmarks"}>
            <div className="navbar-brand">{item}</div>
        </Link>
    ));

export default SelectingCategory;
