import React from "react";
import "./CharactersModal.css";

const CharactersModal = (props) => (
    <div>
        {!!props.characterId && (
            <div className={`modal-wrapper ${props.isOpened ? "open" : "close"}`}>
                <div className="modal-body">
                    <div className="modal-close" onClick={props.closeModal}>
                        X
                    </div>
                    <h1>{props.characterId.name}</h1>
                    <img
                        className="modal-image"
                        src={props.characterId.image}
                        alt="character's image"
                    ></img>
                    <ul className="list-group">
                        <li className="list-group-item">
                            Date of creation: {props.characterId.created}{" "}
                        </li>
                        <li className="list-group-item">Gender: {props.characterId.gender}</li>
                        <li className="list-group-item">Id: {props.characterId.id}</li>
                        <li className="list-group-item">
                            Locatin: {props.characterId.location.name}
                        </li>
                        <li className="list-group-item">
                            Origin: {props.characterId.location.name}
                        </li>
                        <li className="list-group-item">Species: {props.characterId.species}</li>
                        <li className="list-group-item">Status: {props.characterId.status}</li>
                    </ul>
                </div>
            </div>
        )}
    </div>
);

export default CharactersModal;
