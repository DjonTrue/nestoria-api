import React, { useState, useEffect } from "react";
import getCharactersData from "../../api/appApi";
import { useDispatch } from "react-redux";
import { setBookmarks } from "../../redux/actions/bookmarksActions";
import CharactersButton from "./CharactersButton/CharactersButton";

import "./CharacterCard.css";

const CharacterCard = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);

    useEffect(() => {
        getCharactersData("https://rickandmortyapi.com/api/character").then((res) => {
            setItems(res);
        });
    }, []);

    const addCharacterToBookmarks = (character) => {
        dispatch(setBookmarks(character));
    };

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
            <button type="button" className="btn btn-card btn-primary">
                View full info
            </button>
            <CharactersButton onAddCharacters={addCharacterToBookmarks} item={item} />
        </div>
    ));
};

export default CharacterCard;
