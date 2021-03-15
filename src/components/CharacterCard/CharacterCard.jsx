import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCharactersData from "../../redux/actions/fetchActionApi";
import { setBookmarks } from "../../redux/actions/bookmarksActions";
import CharactersButton from "./CharactersButton/CharactersButton";

import "./CharacterCard.css";

const CharacterCard = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.characters);

    useEffect(() => {
        dispatch(getCharactersData({ page: 1 }));
    }, []);

    const addCharacterToBookmarks = useCallback((character) => {
        dispatch(setBookmarks(character));
    }, []);

    return (
        <div>
            {!!items.length &&
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
                            <button type="button" className="btn btn-card btn-primary">
                                View full info
                            </button>
                            <CharactersButton
                                onAddCharacters={addCharacterToBookmarks}
                                item={item}
                            />
                        </div>
                    );
                })}
        </div>
    );
};

export default CharacterCard;
