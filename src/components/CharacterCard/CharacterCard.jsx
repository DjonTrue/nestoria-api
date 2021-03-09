import React, { useState, useEffect } from "react";
import getCharactersData from "../../api/appApi";

import "./CharacterCard.css";

const CharacterCard = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getCharactersData("https://rickandmortyapi.com/api/character").then((res) => {
            setItems(res);
        });
    }, []);

    const addCharacterToBookmarks = (characterId) => {
        console.log(characterId)
    }

    return items.map((item, index) => (
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
            <button type="button" className="btn btn-card btn-primary">View full info</button>
            <button type="button"
                className="btn btn-card btn-success"
                onClick={() => addCharacterToBookmarks(item.id)}
            >Add to bookmark</button>
        </div>
    ));
};

export default CharacterCard;
