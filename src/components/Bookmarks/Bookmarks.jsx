import React from "react";
import { useSelector } from "react-redux";

const Bookmarks = () => {
    const bookmarksItems = useSelector((state) => state.bookmarks.bookmarks);

    return (
        <div>
            {!bookmarksItems.length == 0 &&
                bookmarksItems.map((item, index) => {
                    return (
                        <div key={`${item}_${index}`} className="card text-white bg-secondary mb-3">
                            <div className="card-header">{item.name}</div>
                            <div className="card-body">
                                <img src={item.image} alt="picture" />
                                <ul>
                                    <li className="card-text">{item.status}</li>
                                    <li className="card-text">{item.species}</li>
                                    <li className="card-text">{item.gender}</li>
                                </ul>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};
export default Bookmarks;
