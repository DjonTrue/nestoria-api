const initialState = {
    items: [],
};

const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CHARACTERS":
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
};

export default charactersReducer;
