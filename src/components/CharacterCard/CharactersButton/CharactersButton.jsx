import React from "react";

const CharactersButton = ({ onAddCharacters, item }) => {
    const onClickAddCharacters = () => {
        onAddCharacters(item);
    };
    return (
        <button type="button" className="btn btn-card btn-success" onClick={onClickAddCharacters}>
            Add to bookmark
        </button>
    );
};

export default CharactersButton;
