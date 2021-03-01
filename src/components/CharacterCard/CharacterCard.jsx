import React, { useState, useEffect } from "react";
import charactersApi from "../../api/charactersApi";

import "./CharacterCard.css";

const CharacterCard = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        charactersApi("https://rickandmortyapi.com/api/character").then((res) => {
            setItems(res);
        });
    }, []);

    return (
        //items &&

        items.map((item, index) => {
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
        })
    );
};

export default CharacterCard;
